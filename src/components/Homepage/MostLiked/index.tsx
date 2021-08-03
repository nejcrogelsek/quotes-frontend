import { FC } from 'react'
import { Link } from 'react-router-dom'
import { QuoteBlock } from '../..'

interface Props {
    text: string;
}

const MostLiked: FC<Props> = ({ text }: Props) => {
    return (
        <div className={text === 'signup' ? 'homepage-most-liked signup' : 'homepage-most-liked'}>
            <h2 className='page-title secondary'>Most liked quotes</h2>
            <p>Most liked quotes on the platform.  Sign up or login to like the quotes  and keep them saved in your profile.</p>
            <div className='quotes-wrap'>
                <QuoteBlock />
                <QuoteBlock />
                <QuoteBlock />
                <QuoteBlock />
            </div>
            {text === 'signup' ? <Link to='signup' className='btn site-btn btn-light signup'>Sign up to see more</Link> : <button className='btn site-btn btn-light load-more'>Load more</button>}
        </div>
    )
}

export default MostLiked
