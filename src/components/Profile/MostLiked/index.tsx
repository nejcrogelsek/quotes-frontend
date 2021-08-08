import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../../'
import quotes from '../../../assets/db/quotes.json'

const ProfileMostLiked: FC = () => {
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
        <div className='profile-most-liked signup'>
            <h3 className='page-title-h3 orange'>Likes</h3>
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
            <button className='btn site-btn btn-light load-more'>Load more</button>
        </div>
    )
}

export default ProfileMostLiked
