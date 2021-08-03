import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { QuoteBlock } from '../..'
import quotes from '../../../assets/db/quotes.json'

interface Props {
    text: string;
}

const MostLiked: FC<Props> = ({ text }: Props) => {
    const [isMobile, setIsMobile] = useState(true);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    let loop: number = 0;

    return (
        <div className={text === 'signup' ? 'homepage-most-liked signup' : 'homepage-most-liked'}>
            <h2 className='page-title secondary'>Most liked quotes</h2>
            <p>Most liked quotes on the platform.  Sign up or login to like the quotes  and keep them saved in your profile.</p>
            <div className='quotes-wrap'>
                {quotes.map(quote => {
                    loop++;
                    if (isMobile === true && loop < 5) {
                        return <QuoteBlock key={quote.id} votes={quote.votes} username={quote.username} image_url={quote.image_url} quote={quote.quote} />
                    } else if (isMobile === false && loop < 10) {
                        return <QuoteBlock key={quote.id} votes={quote.votes} username={quote.username} image_url={quote.image_url} quote={quote.quote} />
                    } else {
                        return null
                    }
                })}
            </div>
            {text === 'signup' ? <Link to='signup' className='btn site-btn btn-light signup'>Sign up to see more</Link> : <button className='btn site-btn btn-light load-more'>Load more</button>}
        </div>
    )
}

export default MostLiked
