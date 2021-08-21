import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../..'
import { QuoteData } from '../../../interfaces/quote.interface';

const MostRecent: FC = () => {
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
        <div className='homepage-most-recent'>
            <h2 className='page-title secondary'>Most recent quotes</h2>
            <p>Recent quotes updates as soon user adds new quote. Go ahead show them that you seen the new quote and like the ones you like.</p>
            <div className='quotes-wrap'>
                {stateQuotes.map(quote => {
                    loop++;
                    if (isMobile === true && loop < 5) {
                        return null
                    } else if (isMobile === false && loop < 10) {
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

export default MostRecent
