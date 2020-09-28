import { WebsiteInfo } from '@/types'
import $ from './style.module.scss'

export type WebsiteItemProps = WebsiteInfo

const WebsiteItem: React.FC<WebsiteItemProps> = (props) => {
  return (
    <a
      className={$['link']}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={$['item']}>
        <div className={$['icon-wrapper']}>
          <img className={$['icon']} src={props.imgSrc} alt={props.name} />
        </div>
        <h2 className={$['name']}>{props.name}</h2>
      </div>
    </a>
  )
}

export default WebsiteItem
