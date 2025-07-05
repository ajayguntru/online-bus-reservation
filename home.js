import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {from: '', to: '', date: ''}

  onDate = event => {
    this.setState({date: event.target.value})
  }

  onFrom = event => {
    this.setState({from: event.target.value})
  }

  onTo = event => {
    this.setState({to: event.target.value})
  }

  searchBtn = () => {
    const {from, to, date} = this.state
    const {history} = this.props

    const jwt = Cookies.get('jwt_token')
    if (jwt !== undefined) {
      history.replace('/Busses')
      Cookies.set('from', from, {expires: 10})
      Cookies.set('to', to, {expires: 10})
      Cookies.set('date', date, {expires: 10})
    } else {
      history.replace('/login')
    }
  }

  render() {
    const {from, to, date} = this.state
    const accessToken = Cookies.get('jwt_token')

    if (accessToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <div>
        <Header />

        <div className="home">
          <h1>Bus Tickets</h1>
          <div className="search-cont">
            <input
              onChange={this.onFrom}
              value={from}
              type="text"
              className="input"
              placeholder="From"
            />
            <hr className="line" />
            <input
              onChange={this.onTo}
              value={to}
              type="text"
              className="input"
              placeholder="To"
            />
            <hr className="line" />
            <input
              onChange={this.onDate}
              value={date}
              type="date"
              className="input"
              placeholder="Date"
            />
          </div>
          <button
            onClick={this.searchBtn}
            type="button"
            className="search-button"
          >
            Search Bus
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
