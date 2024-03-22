import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = (props) => {
  return (
    <ul className={props.parentClass} id={props.itemClass}>
      {pageLinks.map((link) => {
        return (
          <PageLink key={link.id} link={link} itemClass={props.itemClass} />
        )
      })}
    </ul>
  )
}
export default PageLinks
