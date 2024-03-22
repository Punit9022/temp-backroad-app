import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks itemClass="footer-link" parentClass="footer-links" />

      <SocialLinks itemClass="footer-icon" parentClass="footer-icons" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
