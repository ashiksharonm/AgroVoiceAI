import { cn } from '@/lib/utils'
import { DotBackGround } from '@/components/Home/grid-bg'
import { BentoGrid, BentoGridItem } from '@/components/Home/grid-layout'
import HomeFeatures from '@/components/Home/home-features'
import { features } from '@/config/constants'

export default async function IndexPage() {
  return (
    <>
      <div className="flex justify-center dark:bg-black bg-slate-50 flex-col items-center mt-0">
        <DotBackGround />
        <HomeFeatures />
        <BentoGrid className="max-w-4xl mx-auto py-10">
          {features.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn(
                i === 0 || i === 3 || i === 4 ? 'md:col-span-2' : '',
                i === 4 || i === 5 ? 'md:mt-[15rem]' : '',
                i === 6 ? 'md:col-span-3' : ''
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </>
  )
}
