import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = (props) => {
  const { itemClass, parentClass } = props
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default SocialLinks
