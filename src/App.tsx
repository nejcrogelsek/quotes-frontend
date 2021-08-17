import { FC, useEffect, useMemo, useState } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Footer, Header, PrivateRoute, PublicRoute } from './components'
import { Home, Login, Profile, Register } from './pages'
import TopRight from './assets/images/vector_top_right.png'
import MiddleLeft from './assets/images/vector_middle_left.png'
import MiddleRight from './assets/images/vector_middle_right.png'
import TopRightMobile from './assets/images/vector_top_right_mobile.png'
import MiddleLeftMobile from './assets/images/vector_middle_left_mobile.png'
import MiddleRightMobile from './assets/images/vector_middle_right_mobile.png'
import { UserContext } from './stores/user.context'
import { UserData } from './interfaces/auth.interface'
import axios from 'axios'

const App: FC = () => {

  const [userValue, setUserValue] = useState<UserData | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  const checkIfMobile = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const checkIfAccessTokenExists = () => {
    const token = localStorage.getItem('user');
    console.log(token);
    if (token) {
      // axios.get('/users/protected', { headers: { 'Authorization': `${token}` } }).then((res) => {
      //   console.log('TOKEN DATA: ', res.data);
      // }).catch(err => {
      //   console.error('ERROR MESSAGE: ', err);
      // })
    }
  }


  useEffect(() => {
    checkIfAccessTokenExists();
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const userProvider = useMemo(() => ({
    userValue, setUserValue
  }), [userValue, setUserValue]);

  return (
    <UserContext.Provider value={userProvider}>
      <Router>
        <Header />
        <Switch>
          <PublicRoute exact path='/' component={Home} />
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/signup' component={Register} />
          <PrivateRoute exact path='/me' component={Profile} />
        </Switch>
        <Footer />
        <img className='background-image background-image1' src={isMobile ? TopRightMobile : TopRight} alt='' />
        <img className='background-image background-image2' src={isMobile ? MiddleLeftMobile : MiddleLeft} alt='' />
        <img className='background-image background-image3' src={isMobile ? MiddleRightMobile : MiddleRight} alt='' />
      </Router>
    </UserContext.Provider>
  )
}

export default App
