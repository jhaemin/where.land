import { isClient } from '@/utils'
import { createPortal } from 'react-dom'

export type ActionsPopUpProps = unknown

const ActionsPopUp: React.FC<ActionsPopUpProps> = (props) => {
  return isClient
    ? createPortal(
        <></>,
        document.getElementById('actions-pop-up') as HTMLElement
      )
    : null
}

export default ActionsPopUp
