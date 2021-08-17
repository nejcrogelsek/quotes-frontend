import { FC, useContext } from 'react'
import { Hero, MostLiked, QuoteBlock, MostRecent } from '../../components'
import { UserContext } from '../../stores/user.context';

const Home: FC = () => {
    const { userValue } = useContext(UserContext)
    return (
        <div className='home-page'>
            <div className='container-lg'>
                {userValue ?
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
