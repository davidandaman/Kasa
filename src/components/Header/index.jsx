import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

function Header() {
  return (
  <div>
      <Link to="/">
      <img src={logo} alt="Kasa"/>
      </Link>
       <nav>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
