import WebsiteItem from '@/components/WebsiteItem'
import { WebsiteInfo } from '@/types'
import $ from './home.module.scss'

const websiteSectionData = [
  {
    sectionTitle: '포털',
    items: [
      {
        name: '덕덕고',
        link: 'https://www.duckduckgo.com',
        imgSrc: '/assets/website-icons/duckduckgo.png',
      },
      {
        name: '구글',
        link: 'https://www.google.com',
        imgSrc: '/assets/website-icons/google.png',
      },
      {
        name: '네이버',
        link: 'https://www.naver.com',
        imgSrc: '/assets/website-icons/naver.png',
      },
      {
        name: '다음',
        link: 'https://www.daum.net',
        imgSrc: '/assets/website-icons/daum.png',
      },
    ],
  },
  {
    sectionTitle: '웹툰',
  },
] as {
  sectionTitle: string
  items: WebsiteInfo[]
}[]

const WebsiteSection: React.FC<{
  sectionTitle: string
  items: WebsiteInfo[]
}> = (props) => {
  return (
    <section className={$['category-section']}>
      <h1 className={$['subject']}>{props.sectionTitle}</h1>
      <div className={$['items-container']}>
        {props.items?.map((websiteData) => (
          <WebsiteItem key={websiteData.name} {...websiteData} />
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className={$['home']}>
      {websiteSectionData.map((section) => (
        <WebsiteSection key={section.sectionTitle} {...section} />
      ))}
    </div>
  )
}
