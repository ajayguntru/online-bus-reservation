import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav">
    <img
      className="nav-logo"
      src="https://i.postimg.cc/RFspZfJk/IMG-5130.jpg"
      alt="logo"
    />
    <div className="nav-links-cont">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/bookings" className="nav-link">
        My bookings
      </Link>
    </div>
  </nav>
