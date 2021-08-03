import { FC } from 'react'
import { QuoteBlock } from '../..'

const MostLiked: FC = () => {
    return (
        <div className='homepage-most-liked'>
            <h2 className='page-title secondary'>Most liked quotes</h2>
            <p>Most liked quotes on the platform.  Sign up or login to like the quotes  and keep them saved in your profile</p>
            <div className="quotes-wrap">
                <QuoteBlock />
                <QuoteBlock />
                <QuoteBlock />
                <QuoteBlock />
            </div>
        </div>
    )
}

export default MostLiked
