import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks itemClass="nav-link" parentClass="nav-links" />

        <SocialLinks itemClass="nav-icon" parentClass="nav-icons" />
      </div>
    </nav>
  )
}
export default Navbar

// We can setup the data at different location and than import that data and than interate over the list
// In this case we control the data at one place and whenever we require that data we just simply i
// mport that data
