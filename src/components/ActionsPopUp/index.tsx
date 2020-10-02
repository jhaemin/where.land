import cn from 'classnames'
import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import $ from './style.module.scss'

export const actionsPopUpStateAtom = atom({
  key: 'actionsPopUpState',
  default: {
    isActive: false,
    position: {
      x: 0,
      y: 0,
    },
    websiteInfo: {
      name: '',
      url: '',
    },
  },
})

function ActionItem(props: { text: string; icon: string; isLast?: boolean }) {
  const { isLast = false } = props

  return (
    <>
      <li className={$['action-item']}>
        <span className={$['text']}>{props.text}</span>
        <i className={cn('f7-icons', $['icon'])}>{props.icon}</i>
      </li>
      {!isLast && <hr className={$['separator']} />}
    </>
  )
}

function ActionsPopUpComponent() {
  const actionsPopUpRef = useRef<HTMLDivElement>(null)

  const setActionsPopUpState = useSetRecoilState(actionsPopUpStateAtom)
  const { isActive, position, websiteInfo } = useRecoilValue(
    actionsPopUpStateAtom
  )

  const clientWidth = actionsPopUpRef.current?.clientWidth ?? 0
  const clientHeight = actionsPopUpRef.current?.clientHeight ?? 0

  let left = position.x - clientWidth / 2
  let top = position.y + 30

  if (left + clientWidth > window.innerWidth) {
    left = window.innerWidth - clientWidth - 10
  }

  if (top + clientHeight > window.innerHeight) {
    top = window.innerHeight - clientHeight - 10
  }

  return (
    <div
      className={cn($['actions-pop-up-container'], {
        [$['active']]: isActive,
      })}
    >
      <div
        className={$['bg']}
        onClick={() => {
          setActionsPopUpState((previous) => {
            return {
              ...previous,
              isActive: false,
            }
          })
        }}
      />
      <div
        ref={actionsPopUpRef}
        className={$['actions-pop-up']}
        style={{
          left,
          top,
        }}
      >
        <ol className={$['actions']}>
          <ActionItem text="방문하기" icon="globe" />
          <ActionItem text="링크 복사" icon="link" />
          <ActionItem text="리뷰" icon="quote_bubble" />
          <ActionItem text="공유" icon="square_arrow_up" isLast />
        </ol>
      </div>
    </div>
  )
}

    <ActionsPopUpComponent />,
        document.getElementById('actions-pop-up') as HTMLElement
      )
    : null
}

export default ActionsPopUp
