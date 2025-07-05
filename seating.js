import {Component} from 'react'

import SeatingHeader from '../SeatingHeader'

import './index.css'
import Seats from '../Seats'

class Seating extends Component {
  state = {lowerList: seatsL, upperList: seatsUpper, seats: 0}

  render() {
    const {lowerList, upperList, seats} = this.state

    const onEat = async id => {
      let cl = ''
      let cu = ''
      if (Number(id) <= 31) {
        const newList = await lowerList.map(k => {
          if (k.id === Number(id)) {
            if (k.color === 'White') {
              cl = 'White'

              return {...k, color: 'blue'}
            }
            cl = 'blue'
            return {...k, color: 'White'}
          }
          return k
        })
        if (cl === 'White') {
          await this.setState(prevState => ({
            lowerList: newList,
            seats: prevState.seats + 1,
          }))
        } else if (cl === 'blue') {
          await this.setState(prevState => ({
            lowerList: newList,
            seats: prevState.seats - 1,
          }))
        }
      } else {
        const newUpp = await upperList.map(p => {
          if (p.id === Number(id)) {
            if (p.color === 'White') {
              cu = 'White'

              return {...p, color: 'blue'}
            }
            cu = 'blue'
            return {...p, color: 'White'}
          }
          return p
        })
        if (cu === 'White') {
          await this.setState(prevState => ({
            upperList: newUpp,
            seats: prevState.seats + 1,
          }))
        } else if (cu === 'blue') {
          await this.setState(prevState => ({
            upperList: newUpp,
            seats: prevState.seats - 1,
          }))
        }
      }
    }

    return (
      <div className="main-seating">
        <SeatingHeader />
        <div className="seating-cont">
          <div className="lower-desk">
            <div className="desk">
              <p>Lower Desk</p>
              <img
                className="steering"
                src="https://thumbs.dreamstime.com/b/steering-wheel-line-icon-car-steering-wheel-vector-line-icon-isolated-white-background-traffic-concept-steering-wheel-line-icon-113774791.jpg"
                alt="steering"
              />
            </div>
            <hr className="line1" />
            <ul className="seating">
              {lowerList.map(j => (
                <Seats key={j.id} id={j.id} kl={j.color} onSeat={onEat} />
              ))}
            </ul>
          </div>
          <div className="lower-desk">
            <div className="desk">
              <p>Upper Desk</p>
            </div>
            <hr className="line" />
            <ul className="seating">
              {upperList.map(j => (
                <Seats key={j.id} id={j.id} kl={j.color} onSeat={onEat} />
              ))}
            </ul>
          </div>
        </div>
        <div className="btn-cont">
          <div className="para-cont">
            <p className="seatPara">Seats: {seats}</p>
          </div>
          <button type="button" className="proceed-btn">
            Proceed
          </button>
        </div>
      </div>
    )
  }
}

export default Seating
