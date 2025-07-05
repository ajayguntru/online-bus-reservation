import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoute, faCalendar} from '@fortawesome/free-solid-svg-icons'
import {MdWeekend} from 'react-icons/md'

import './index.css'

const NavBusses = props => {
  const {from, to, date} = props
  const backBtn = () => {
    const {history} = props
    Cookies.remove('to')
    Cookies.remove('from')
    Cookies.remove('date')
    history.replace('/')
  }

  return (
    <div className="nav-bus">
      <button onClick={backBtn} className="back-button" type="button">
        Back
      </button>

      <div className="root">
        <div className="root1">
          <p className="from">{from}</p>
          <p className="from">To</p>
          <p className="from">{to}</p>
          <FontAwesomeIcon className="root-img" icon={faRoute} />
          <MdWeekend />
        </div>
        <div className="date-cont">
          <FontAwesomeIcon className="date-img" icon={faCalendar} />
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(NavBusses)
 
