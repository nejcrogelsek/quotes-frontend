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
import { QuoteData, RandomQuote } from './interfaces/quote.interface'
import { QuoteContext } from './stores/quote.context'
import { IVotes } from './interfaces/vote.interface'
import { VoteContext } from './stores/vote.context'
import { ToastContainer } from 'react-toastify'
import { RandomQuoteContext } from './stores/random-quote.context'

const App: FC = () => {

  const [userValue, setUserValue] = useState<UserData | null>(null);
  const [quoteValue, setQuoteValue] = useState<QuoteData | null>(null);
  const [votesValue, setVotesValue] = useState<IVotes | null>(null);
  const [randomQuote, setRandomQuote] = useState<RandomQuote | null>(null);
  const [isMobile, setIsMobile] = useState(true);
  const [quotes, setQuotes] = useState([]);

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
      await axios.get('/users/protected', { headers: { 'Authorization': `Bearer ${token}` } }).then(async (res) => {
        setUserValue(res.data);
        await axios.get(`/quotes/${res.data.id}`).then(res => {
          setQuoteValue(res.data);
        });
        checkForRefreshToken();
      }).catch(err => {
        console.error('ERROR MESSAGE: ', err);
      })
    }
  }

  const checkForRefreshToken = () => {
    if (localStorage.getItem('user')) {
      const payload = JSON.parse(getPayload());
      const expiration = new Date(payload.exp);
      const now = new Date();
      const minutes = 1000 * 60 * 14;

      if (expiration.getTime() - now.getTime() < minutes) {
        axios.post('users/refresh-token', { name: payload.name, sub: payload.sub }).then(async (res) => {
          localStorage.setItem('user', res.data.access_token);
        });
      }
    }
  }

  function getPayload() {
    const token: string = localStorage.getItem('user')!;
    return atob(token.split(".")[1]);
  }

  useEffect(() => {
    checkIfAccessTokenExists();
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      checkForRefreshToken();
    }, 1000 * 60 * 14);

    return () => clearInterval(interval);
  }, [])

  const getQuotes = async () => {
    await axios.get('quotes').then((res) => {
      setQuotes(res.data);
    });
  }

  useEffect(() => {
    getQuotes();
  }, [])

  const randomQuoteFunc = () => {
    if (quotes) {
      let quote = quotes[Math.floor(Math.random() * quotes.length)];
      if (quote) {
        const { message } = quote;
        if (message !== '') {
          setRandomQuote(quote);
        }
      }
    }
  }

  useEffect(() => {
    randomQuoteFunc();
    return () => {
      randomQuoteFunc();
    }
  }, [setQuotes, quotes])

  const userProvider = useMemo(() => ({
    userValue, setUserValue
  }), [userValue, setUserValue]);

  const quoteProvider = useMemo(() => ({
    quoteValue, setQuoteValue
  }), [quoteValue, setQuoteValue]);

  const votesProvider = useMemo(() => ({
    votesValue, setVotesValue
  }), [votesValue, setVotesValue]);

  const randomQuoteProvider = useMemo(() => ({
    randomQuote, setRandomQuote
  }), [randomQuote, setRandomQuote]);

  return (
    <UserContext.Provider value={userProvider}>
      <QuoteContext.Provider value={quoteProvider}>
        <VoteContext.Provider value={votesProvider}>
          <RandomQuoteContext.Provider value={randomQuoteProvider}>
            <Router>
              <ToastContainer />
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
          </RandomQuoteContext.Provider>
        </VoteContext.Provider>
      </QuoteContext.Provider>
    </UserContext.Provider>
  )
}

export default App
