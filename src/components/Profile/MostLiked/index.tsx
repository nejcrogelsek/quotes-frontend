import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../../'
import { QuoteData } from '../../../interfaces/quote.interface';

const ProfileMostLiked: FC = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [stateQuotes, setStateQuotes] = useState<QuoteData[]>([]);

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
        <div className='profile-most-liked'>
            <h3 className='page-title-h3 orange'>Likes</h3>
            <div className='quotes-wrap'>
                {stateQuotes.map(quote => {
                    loop++;
                    if (isMobile === true && loop < 5) {
                        return null
                    } else if (isMobile === false && loop < 7) {
                        return null
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
