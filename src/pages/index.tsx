import WebsiteItem from '@/components/WebsiteItem'
import { sectionData } from '@/static-data/websites-data'
import type { SectionInfo } from '@/types'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import $ from './index.module.scss'

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
  return (
    <div className={$['home']}>
      {sectionData.map((section) => (
        <WebsiteSection key={section.sectionTitle} {...section} />
      ))}
      <DynamicActionsPopUp />
    </div>
  )
}
