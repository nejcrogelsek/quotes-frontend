import { FC } from 'react'
import { Hero } from '../../components'

const Home: FC = () => {
    return (
        <div className='home-page'>
            <div className='container-lg'>
                <Hero />
                <h2 className='page-title explore-title'>Explore the world of <span>fantastic quotes</span></h2>
            </div>
        </div>
    )
}

export default Home
