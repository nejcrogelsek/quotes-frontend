import { FC } from 'react'
import { Link } from 'react-router-dom'
import { QuoteBlock } from '..'

const Hero: FC = () => {
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
                            votes={52}
                            username='John Scott'
                            image_url='../../assets/images/profile5.png'
                            quote='All our dreams can come true, if we have the courage to pursue them.'
                        />
                        <QuoteBlock
                            votes={154}
                            username='Marvin McKinney'
                            image_url='../../assets/images/profile5.png'
                            quote="Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
                        />
                        <QuoteBlock
                            votes={52}
                            username='John Scott'
                            image_url='../../assets/images/profile5.png'
                            quote='All our dreams can come true, if we have the courage to pursue them.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
