import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Busses from './components/Busses'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import Seating from './components/Seating'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/Busses" component={Busses} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/seating" component={Seating} />
    <Route component={NotFound} />
  </Switch>
)

export default App
