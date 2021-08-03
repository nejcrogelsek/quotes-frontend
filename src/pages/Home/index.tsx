import { FC, useState } from 'react'
import { Hero, QuoteBlock } from '../../components'

const Home: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <div className='home-page'>
            <div className='container-lg'>
                {isAuthenticated ?
                    <>
                        <h1 className='page-title text-center'><span>Quote of the day</span></h1>
                        <p className='site-text'>Quote of the day is randomly choosen quote.</p>
                        <QuoteBlock />
                        <h2 className='page-title secondary most-liked-title'>Most liked quotes</h2>
                        <p className='most-liked-text'>Most liked quotes on the platform.  Sign up or login to like the quotes  and keep them saved in your profile</p>
                    </>
                    :
                    <>
                        <Hero />
                        <h2 className='page-title explore-title'>Explore the world of <span>fantastic quotes</span></h2>
                    </>
                }
            </div>
        </div>
    )
}

export default Home
