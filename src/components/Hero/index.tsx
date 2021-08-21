import { FC } from 'react'
import { Link } from 'react-router-dom'
import { QuoteBlock } from '..'

const Hero: FC = () => {
    const user = { id: 1, first_name: 'nejc', last_name: 'rogla', profile_image: 'undefined', email: 'nejc@gmail.com' }
    return (
        <div className='hero-section'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='page-title main-title'>Welcome <span>to <span>Quotastic</span></span></h1>
                    <p>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</p>
                    <Link to='/signup' className='btn site-btn btn-orange w-137'>Sign up</Link>
                </div>
                <div className='col-lg-6'>
                    <div className="hero-quotes-wrap">
                        <QuoteBlock
                            id={1}
                            votes={52}
                            message='All our dreams can come true, if we have the courage to pursue them.'
                            user={user}
                        />
                        <QuoteBlock
                            id={1}
                            votes={154}
                            message="Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
                            user={user}
                        />
                        <QuoteBlock
                            id={1}
                            votes={52}
                            message='All our dreams can come true, if we have the courage to pursue them.'
                            user={user}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
