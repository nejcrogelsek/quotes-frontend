import { FC, useState } from 'react'
import { Hero, MostLiked, QuoteBlock, MostRecent } from '../../components'
import TopRight from '../../assets/images/vector_top_right.png'
import MiddleLeft from '../../assets/images/vector_middle_left.png'
import MiddleRight from '../../assets/images/vector_middle_right.png'

const Home: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <div className='home-page'>
            <img src={TopRight} alt='' />
            <img src={MiddleLeft} alt='' />
            <img src={MiddleRight} alt='' />
            <div className='container-lg'>
                {isAuthenticated ?
                    <>
                        <h1 className='page-title text-center'><span>Quote of the day</span></h1>
                        <p className='site-text'>Quote of the day is randomly choosen quote.</p>
                        <QuoteBlock
                            votes={52}
                            username='Marvin McKinney'
                            image_url='../../assets/images/profile5.png'
                            quote='People will forget what you said. People will forget what you did. But people will never forget how you made them feel.'
                        />
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
