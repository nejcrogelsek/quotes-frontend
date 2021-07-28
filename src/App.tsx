import { FC } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Footer, Header, PublicRoute } from './components'
import { Home, Login, Register } from './pages'

const App: FC = () => {
  return (
    <Router>
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
