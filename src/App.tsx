import { FC, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Footer, Header, PublicRoute } from './components'
import { Home, Login, Register } from './pages'
import TopRight from './assets/images/vector_top_right.png'
import MiddleLeft from './assets/images/vector_middle_left.png'
import MiddleRight from './assets/images/vector_middle_right.png'
import TopRightMobile from './assets/images/vector_top_right_mobile.png'
import MiddleLeftMobile from './assets/images/vector_middle_left_mobile.png'
import MiddleRightMobile from './assets/images/vector_middle_right_mobile.png'

const App: FC = () => {

  const [isMobile, setIsMobile] = useState(true);

  const checkIfMobile = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };


  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/signup' component={Register} />
      </Switch>
      <Footer />
      <img className='background-image1' src={isMobile ? TopRightMobile : TopRight} alt='' />
      <img className='background-image2' src={isMobile ? MiddleLeftMobile : MiddleLeft} alt='' />
      <img className='background-image3' src={isMobile ? MiddleRightMobile : MiddleRight} alt='' />
    </Router>
  )
}

export default App
