import ReactDOM from 'react-dom'

export type ActionsPopUpProps = unknown

const ActionsPopUp: React.FC<ActionsPopUpProps> = (props) => {
  return ReactDOM.createPortal(
    <></>,
    document.getElementById('actions-pop-up') as HTMLElement
  )
}

export default ActionsPopUp
