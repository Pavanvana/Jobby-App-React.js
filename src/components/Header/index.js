import './index.css'

import {Link, withRouter} from 'react-router-dom'
import {MdHome, MdWork} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <ul className="small-container">
        <li className="small-list-item">
          <MdHome className="icons" />
        </li>
        <li className="small-list-item">
          <MdWork className="icons" />
        </li>
        <li className="small-list-item">
          <FiLogOut className="icons" />
        </li>
      </ul>
      <div className="large-container">
        <ul className="large-list">
          <li className="header-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>

          <li className="header-item">
            <Link to="/jobs" className="link">
              jobs
            </Link>
          </li>
        </ul>
        <button className="logout-button" type="submit" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default withRouter(Header)
