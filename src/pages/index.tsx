import WebsiteItem from '@/components/WebsiteItem'
import { WebsiteInfo } from '@/types'
import dynamic from 'next/dynamic'
import $ from './home.module.scss'

const DynamicActionsPopUp = dynamic(() => import('@/components/ActionsPopUp'), {
  ssr: false,
})

const websiteSectionData = [
  {
    sectionTitle: '포털/검색',
    items: [
      {
        websiteKey: 'duckduckgo',
        name: '덕덕고',
        url: 'https://www.duckduckgo.com',
        imgSrc: '/assets/website-icons/duckduckgo.png',
      },
      {
        websiteKey: 'google',
        name: '구글',
        url: 'https://www.google.com',
        imgSrc: '/assets/website-icons/google.png',
      },
      {
        websiteKey: 'naver',
        name: '네이버',
        url: 'https://www.naver.com',
        imgSrc: '/assets/website-icons/naver.png',
      },
      {
        websiteKey: 'daum',
        name: '다음',
        url: 'https://www.daum.net',
        imgSrc: '/assets/website-icons/daum.png',
      },
    ],
  },
  {
    sectionTitle: '배달음식',
    items: [
      {
        websiteKey: 'baemin',
        name: '배달의민족',
        url: 'https://www.baemin.com',
        imgSrc: '/assets/website-icons/baemin.png',
      },
      {
        websiteKey: 'yogiyo',
        name: '요기요',
        url: 'https://www.yogiyo.co.kr',
        imgSrc: '/assets/website-icons/yogiyo.jpg',
      },
      {
        websiteKey: 'bdtong',
        name: '배달통',
        url: 'https://www.bdtong.co.kr',
        imgSrc: '/assets/website-icons/bdtong.png',
      },
    ],
  },
  {
    sectionTitle: '숙박',
    items: [
      {
        websiteKey: 'airbnb',
        name: '에어비앤비',
        url: 'https://www.airbnb.co.kr',
        imgSrc: '/assets/website-icons/airbnb.png',
      },
      {
        websiteKey: 'yanolja',
        name: '야놀자',
        url: 'https://www.yanolja.com',
        imgSrc: '/assets/website-icons/yanolja.png',
      },
      {
        websiteKey: 'goodchoice',
        name: '여기어때',
        url: 'https://www.goodchoice.kr',
        imgSrc: '/assets/website-icons/goodchoice.jpg',
      },
    ],
  },
  {
    sectionTitle: '웹툰',
    items: [
      {
        websiteKey: 'manhwakyung',
        name: '만화경',
        url: 'https://www.manhwakyung.com',
        imgSrc: '/assets/website-icons/manwhakyung.png',
      },
      {
        websiteKey: 'naver_webtoon',
        name: '네이버 웹툰',
        url: 'https://comic.naver.com/webtoon/weekday.nhn',
        imgSrc: '/assets/website-icons/naver-webtoon.png',
      },
      {
        websiteKey: 'daum_webtoon',
        name: '다음 웹툰',
        url: 'http://webtoon.daum.net',
        imgSrc: '/assets/website-icons/daum-webtoon.png',
      },
      {
        websiteKey: 'kakao_page',
        name: '카카오페이지',
        url: 'https://page.kakao.com',
        imgSrc: '/assets/website-icons/kakao-page.png',
      },
      {
        websiteKey: 'lezhin',
        name: '레진코믹스',
        url: 'https://www.lezhin.com/ko',
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
          <WebsiteItem key={websiteData.websiteKey} {...websiteData} />
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
      <DynamicActionsPopUp />
    </div>
  )
}
