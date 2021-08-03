import { FC, useState } from 'react'
import { Hero, MostLiked, QuoteBlock, MostRecent } from '../../components'

const Home: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <div className='home-page'>
            <div className='container-lg'>
                {isAuthenticated ?
                    <>
                        <h1 className='page-title text-center'><span>Quote of the day</span></h1>
                        <p className='site-text'>Quote of the day is randomly choosen quote.</p>
                        <QuoteBlock />
                        <MostLiked text='null' />
                        <MostRecent />
                    </>
                    :
                    <>
                        <Hero />
                        <h2 className='page-title explore-title'>Explore the world of <span>fantastic quotes</span></h2>
                        <MostLiked text='signup' />
                    </>
                }
            </div>
        </div>
    )
}

export default Home
