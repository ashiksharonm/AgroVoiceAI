import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

import { auth } from '@/lib/auth'
import { nanoid } from '@/lib/utils'
import redis from '@/lib/redis'
import { getChatbotPreference } from '@/app/actions'
// export const runtime = 'nodejs16'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!
})

export async function POST(req: Request) {
  const json = await req.json()
  const { messages } = json
  const userId = (await auth())?.user.id
  const preferences = await getChatbotPreference()

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401
    })
  }

  const extraMessages = []
  if (preferences) {
    extraMessages.push({ content: preferences, role: 'user' })
  }

  const allMessages = messages.concat(extraMessages)

  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: allMessages,
    temperature: 0.7,
    stream: true
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/c/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant'
          }
        ]
      }
      await redis.hmset(`chat:${id}`, payload)
      await redis.zadd(`user:chat:${userId}`, {
        score: createdAt,
        member: `chat:${id}`
      })
    }
  })

  return new StreamingTextResponse(stream)
}
