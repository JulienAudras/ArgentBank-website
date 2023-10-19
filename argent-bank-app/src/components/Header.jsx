import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from "./Logo"
import Log from "./Log"
import "../style/style.css"

export const Header = () => {

  const logState = useSelector((state) => state.auth.isLogged);

  if(logState) {
    return (
      <nav className="header">    
          <Link to="/accounts" className="linkToMainPage" data-testid="linkToMainPage-testid">
              <Logo />
          </Link>
          <h1 className="sr-only">Argent Bank</h1>
          <Log />
      </nav>
    )
  }
  return (
    <nav className="header">    
        <Link to="/" className="linkToMainPage" data-testid="linkToMainPage-testid">
            <Logo />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <Log />
    </nav>
  )
}

export default Header