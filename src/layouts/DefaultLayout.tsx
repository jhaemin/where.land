import classNames from 'classnames'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import $ from './DefaultLayout.module.scss'

type TabTarget = 'curated' | 'bookmarks'

type TabButtonProps = {
  target: TabTarget
  isActive: boolean
}

const tabPathsMap: Record<TabTarget, string> = {
  curated: '/',
  bookmarks: '/bookmarks',
}

const tabLabelsMap: Record<TabTarget, string> = {
  curated: '서비스',
  bookmarks: '북마크',
}

function TabButton({ target, isActive }: TabButtonProps) {
  const router = useRouter()

  return (
    <button
      className={classNames($['tab'], {
        [$['active']]: isActive,
      })}
      onClick={() => {
        router.replace(tabPathsMap[target])
      }}
    >
      {tabLabelsMap[target]}
    </button>
  )
}

function TabsContainer() {
  const router = useRouter()
  const pathname = router.pathname

  return (
    <div className={$['tabs-container-positioner']}>
      <div className={$['tabs-container']}>
        <TabButton
          target="curated"
          isActive={pathname === tabPathsMap.curated}
        />
        <TabButton
          target="bookmarks"
          isActive={pathname === tabPathsMap.bookmarks}
        />
      </div>
    </div>
  )
}

type DefaultLayoutProps = {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className={$['default-layout']}>
      <TabsContainer />
      {children}
    </div>
  )
}
