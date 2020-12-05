import WebsiteItem from '@/components/WebsiteItem'
import { sectionData } from '@/static-data/websites-data'
import type { SectionInfo } from '@/types'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import $ from './home.module.scss'

const DynamicActionsPopUp = dynamic(() => import('@/components/ActionsPopUp'), {
  ssr: false,
})

const WebsiteSection: React.FC<SectionInfo> = (props) => {
  return (
    <section className={$['category-section']}>
      <h1 className={$['subject']}>
        <i className={classNames('f7-icons', $['section-icon'])}>
          {props.icon}
        </i>
        {props.sectionTitle}
      </h1>
      <div className={$['items-container']}>
        {props.items?.map((websiteData) => (
          <WebsiteItem key={websiteData.websiteKey} {...websiteData} />
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  // useEffect(() => {
  //   const sections = gsap.utils.toArray<HTMLElement>(
  //     `.${$['category-section']}`
  //   )
  //   sections.forEach((section) => {
  //     gsap.to(section, {
  //       scrollTrigger: {
  //         trigger: section,
  //         start: 'top 0',
  //         end: 'bottom 0%',
  //         // markers: true,
  //         scrub: true,
  //       },
  //       y: -section.clientHeight / 15,
  //       opacity: 0,
  //       scale: 0.9,
  //     })
  //   })
  // }, [])

  return (
    <div className={$['home']}>
      <div className={$['header']}>
        <h1 className={$['title']}>
          <span
            style={{
              fontWeight: 500,
            }}
          >
            where
          </span>
          <span>.land</span>
        </h1>
        <h2 className={$['description']}>어디로 가야하오</h2>
      </div>
      {sectionData.map((section) => (
        <WebsiteSection key={section.sectionTitle} {...section} />
      ))}
      <DynamicActionsPopUp />
    </div>
  )
}
