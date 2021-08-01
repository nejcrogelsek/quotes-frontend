import { FC } from 'react'
import { Hero } from '../../components'

const Home: FC = () => {
    return (
        <div className="home-page">
            <div className="container-lg">
                <Hero />
            </div>
        </div>
    )
}

export default Home
