import { FC, useEffect, useMemo, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Footer, Header, PrivateRoute } from './components'
import { Home, Login, Profile, Register } from './pages'
import TopRight from './assets/images/vector_top_right.png'
import MiddleLeft from './assets/images/vector_middle_left.png'
import MiddleRight from './assets/images/vector_middle_right.png'
import TopRightMobile from './assets/images/vector_top_right_mobile.png'
import MiddleLeftMobile from './assets/images/vector_middle_left_mobile.png'
import MiddleRightMobile from './assets/images/vector_middle_right_mobile.png'
import { UserContext } from './stores/user.context'
import { UserData } from './interfaces/auth.interface'
import axios from './api/axios'
import { QuoteData } from './interfaces/quote.interface'
import { QuoteContext } from './stores/quote.context'
import { IQuotes } from './interfaces/app.interface'
import { AppContext } from './stores/app.context'

const App: FC = () => {

  const [userValue, setUserValue] = useState<UserData | null>(null);
  const [quoteValue, setQuoteValue] = useState<QuoteData | null>(null);
  const [usersQuotes, setUsersQuotes] = useState<IQuotes | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  const checkIfMobile = () => {
    if (window.innerWidth < 992) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const checkIfAccessTokenExists = async () => {
    const token: string | null = localStorage.getItem('user');
    if (token) {
      await axios.get('/users/protected', { headers: { 'Authorization': `Bearer ${token}` } }).then((res) => {
        setUserValue(res.data);
        axios.get(`/quotes/${res.data.id}`).then(res => {
          setQuoteValue(res.data);
        })
      }).catch(err => {
        console.error('ERROR MESSAGE: ', err);
      })
    }
  }

  const getQuotes = async () => {
    await axios.get('/quotes').then((res) => {
      setUsersQuotes(res.data);
    })
  }


  useEffect(() => {
    getQuotes();
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

  const quoteProvider = useMemo(() => ({
    quoteValue, setQuoteValue
  }), [quoteValue, setQuoteValue]);

  const usersQuotesProvider = useMemo(() => ({
    usersQuotes, setUsersQuotes
  }), [usersQuotes, setUsersQuotes]);

  return (
    <AppContext.Provider value={usersQuotesProvider}>
      <UserContext.Provider value={userProvider}>
        <QuoteContext.Provider value={quoteProvider}>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Register} />
              <PrivateRoute exact path='/me' component={Profile} />
              <Route path='*' component={Login} />
            </Switch>
            <Footer />
            <img className='background-image background-image1' src={isMobile ? TopRightMobile : TopRight} alt='' />
            <img className='background-image background-image2' src={isMobile ? MiddleLeftMobile : MiddleLeft} alt='' />
            <img className='background-image background-image3' src={isMobile ? MiddleRightMobile : MiddleRight} alt='' />
          </Router>
        </QuoteContext.Provider>
      </UserContext.Provider>
    </AppContext.Provider>
  )
}

export default App
