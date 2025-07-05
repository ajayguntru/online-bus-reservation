import {withRouter} from 'react-router-dom'
import './index.css'

const UserInformation = props => {
  const onBook = () => {
    const {history} = props
    history.replace('/thank')
  }
  const onBack = () => {
    const {history} = props
    history.replace('/seating')
  }

  return (
    <div className="user-cont">
      <div className="sub-user">
        <img
          className="profile"
          src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
          alt="profile"
        />
        <div>
          <div className="inp-cont">
            <label className="name" htmlFor="name">
              Name
            </label>
            <input className="input12" id="name" type="text" />
          </div>
          <div className="inp-cont">
            <label className="name" htmlFor="age">
              Age
            </label>
            <input className="input12" id="age" type="text" />
          </div>
          <div>
            <input
              className="radio"
              id="male"
              type="radio"
              value="Male"
              name="gender"
            />
            <label className="name" htmlFor="male">
              Male
            </label>
            <input
              className="radio"
              id="female"
              type="radio"
              value="Female"
              name="gender"
            />
            <label className="name" htmlFor="female">
              Female
            </label>
            <input
              className="radio"
              id="other"
              type="radio"
              value="Other"
              name="gender"
            />
            <label className="name" htmlFor="other">
              Other
            </label>
          </div>
          <div className="info-cont">
            <h1 className="info">Contact Info</h1>
            <div className="inp-cont">
              <label htmlFor="email">Email</label>
              <input className="input12" id="email" type="text" />
            </div>
            <div className="inp-cont">
              <label htmlFor="phone">Phone</label>
              <input className="input12" id="phone" type="text" />
            </div>
          </div>
          <div className="btn-cont">
            <button onClick={onBack} className="btn-back" type="button">
              Back
            </button>
            <button onClick={onBook} className="btn-book" type="button">
              Conform Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(UserInformation)
