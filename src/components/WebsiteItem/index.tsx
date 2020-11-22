import { WebsiteInfo } from '@/types'
import classNames from 'classnames'
import Image from 'next/image'
import { useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import { actionsPopUpStateAtom } from '../ActionsPopUp'
import $ from './style.module.scss'

export type WebsiteItemProps = WebsiteInfo

const WebsiteItem: React.FC<WebsiteItemProps> = (props) => {
  const actionBtnRef = useRef<HTMLDivElement>(null)

  const setActionsPopUpState = useSetRecoilState(actionsPopUpStateAtom)

  function onClickActionBtn(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault()

    const actionBtnRect = actionBtnRef.current?.getBoundingClientRect()

    setActionsPopUpState((previous) => ({
      ...previous,
      isActive: true,
      position: {
        x: actionBtnRect?.left ?? 0,
        y: actionBtnRect?.top ?? 0,
      },
      websiteInfo: {
        name: props.name,
        url: props.url,
      },
    }))
  }

  return (
    <a
      className={$['link']}
      href={props.url}
      title={props.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={$['item']}>
        <div className={$['icon-wrapper']}>
          {/* <img className={$['icon']} src={props.imgSrc} alt={props.name} /> */}
          <Image
            className={$['icon']}
            src={props.imgSrc}
            alt={props.name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className={$['name']}>{props.name}</h2>
        <div
          ref={actionBtnRef}
          className={$['action-wrapper']}
          onClick={onClickActionBtn}
        >
          <i className={classNames('f7-icons', $['action'])}>
            ellipsis_vertical
          </i>
        </div>
      </div>
    </a>
  )
}

export default WebsiteItem
