import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRoute} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const SeatingHeader = props => {
  const onBck = () => {
    const {history} = props
    history.replace('/busses')
  }
  const onHome = () => {
    Cookies.remove('to')
    Cookies.remove('from')
    const {history} = props
    history.replace('/')
  }
  const fr = Cookies.get('from')
  const t = Cookies.get('to')
  return (
    <div className="seating_header">
      <button onClick={onBck} type="button" className="bckBtn">
        Back
      </button>
      <div className="roo">
        <h1 className="to">{fr}</h1>
        <h1 className="to">To</h1>
        <h1 className="to">{t}</h1>
        <FontAwesomeIcon className="root-img22" icon={faRoute} />
      </div>
      <button onClick={onHome} type="button" className="bckBtn">
        Home
      </button>
    </div>
  )
}

export default withRouter(SeatingHeader)
