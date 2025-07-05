import {useRef} from 'react'

import './index.css'

const Seats = props => {
  const {kl, onSeat, id} = props

  const ref = useRef(null)
  const onS = async event => {
    event.preventDefault()
    await onSeat(event.currentTarget.id)
  }

  return (
    <button
      ref={ref}
      className="seat-button"
      style={{backgroundColor: kl}}
      onClick={onS}
      type="button"
      id={id}
    >
      <img
        className="seat"
        src="https://cdn-icons-png.flaticon.com/512/83/83628.png"
        alt="seat"
      />
    </button>
  )
}

export default Seats
