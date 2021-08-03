import { FC } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Footer, Header, PublicRoute } from './components'
import { Home, Login, Register } from './pages'
import TopRight from './assets/images/vector_top_right.png'
import MiddleLeft from './assets/images/vector_middle_left.png'
import MiddleRight from './assets/images/vector_middle_right.png'

const App: FC = () => {
  return (
    <Router>
      <img className='background-image1' src={TopRight} alt='' />
      <img className='background-image2' src={MiddleLeft} alt='' />
      <img className='background-image3' src={MiddleRight} alt='' />
      <Header />
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/signup' component={Register} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
