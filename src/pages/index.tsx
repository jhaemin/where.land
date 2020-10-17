import WebsiteItem from '@/components/WebsiteItem'
import { websitesData } from '@/static-data/websites-data'
import { WebsiteInfo } from '@/types'
import dynamic from 'next/dynamic'
import $ from './home.module.scss'

const DynamicActionsPopUp = dynamic(() => import('@/components/ActionsPopUp'), {
  ssr: false,
})

const WebsiteSection: React.FC<{
  sectionTitle: string
  items: WebsiteInfo[]
}> = (props) => {
  return (
    <section className={$['category-section']}>
      <h1 className={$['subject']}>{props.sectionTitle}</h1>
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
      </div>
      {websitesData.map((section) => (
        <WebsiteSection key={section.sectionTitle} {...section} />
      ))}
      <DynamicActionsPopUp />
    </div>
  )
}
