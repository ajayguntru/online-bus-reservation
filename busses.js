import {Component} from 'react'
import Cookies from 'js-cookie'
import NavBusses from '../NavBus'
import Cart from '../Cart'
import './index.css'

const busList = [
  {
    no: 'AP01FR899',
    name: 'Intrcity',
    busType: 'A/C Sleeper',
    rating: '4.2',
    btime: '22:40 - ',
    dtime: ' 03:30',
    cost: '800',
    id: 1,
  },
  {
    no: 'TN01OR769',
    name: 'Orange Tours and Travels',
    busType: 'Non A/C Sleeper',
    rating: '4.2',
    btime: '22:40 - ',
    dtime: ' 06:30',
    cost: '800',
    id: 2,
  },
  {
    no: 'MH51TY7659',
    name: 'Sri Venkataramana Travels',
    busType: 'A/C Sleeper / Sleeper(2+1)',
    rating: '4.2',
    btime: '22:40 - ',
    dtime: ' 04:30',
    cost: '800',
    id: 3,
  },
  {
    no: 'AP01FR899',
    name: 'Sri Krishna Tours and Travels',
    busType: 'A/C Sleeper (2+1)',
    rating: '4.2',
    btime: '22:40 - ',
    dtime: ' 4:30',
    cost: '800',
    id: 4,
  },
]

class Busses extends Component {
  render() {
    const from = Cookies.get('from')
    const to = Cookies.get('to')
    const date = Cookies.get('date')
    return (
      <div className="busses-cont">
        <NavBusses from={from} to={to} date={date} />
        <img
          className="nav-img"
          src="https://i.postimg.cc/RFspZfJk/IMG-5130.jpg"
          alt="hb"
        />

        <ul className="list-bus">
          {busList.map(i => (
            <Cart key={i.id} item={i} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Busses
