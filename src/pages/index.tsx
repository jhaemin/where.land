import ActionsPopUp from '@/components/ActionsPopUp'
import WebsiteItem from '@/components/WebsiteItem'
import { WebsiteInfo } from '@/types'
import $ from './home.module.scss'

const websiteSectionData = [
  {
    sectionTitle: '포털/검색',
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
    sectionTitle: '배달음식',
    items: [
      {
        name: '배달의민족',
        link:
          'https://apps.apple.com/kr/app/%EB%B0%B0%EB%8B%AC%EC%9D%98%EB%AF%BC%EC%A1%B1/id378084485',
        imgSrc: '/assets/website-icons/baemin.png',
      },
    ],
  },
  {
    sectionTitle: '숙박',
    items: [
      {
        name: '야놀자',
        link: 'https://www.yanolja.com/',
        imgSrc: '/assets/website-icons/yanolja.png',
      },
    ],
  },
  {
    sectionTitle: '웹툰',
    items: [
      {
        name: '네이버 웹툰',
        link: 'https://comic.naver.com/webtoon/weekday.nhn',
        imgSrc: '/assets/website-icons/naver-webtoon.png',
      },
      {
        name: '다음 웹툰',
        link: 'http://webtoon.daum.net/',
        imgSrc: '/assets/website-icons/daum-webtoon.png',
      },
      {
        name: '레진코믹스',
        link: 'https://www.lezhin.com/ko',
        imgSrc: '/assets/website-icons/lezhin-comics.jpg',
      },
    ],
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
      <ActionsPopUp />
    </div>
  )
}
