import axios from '../../../api/axios';
import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../..'
import { QuoteData } from '../../../interfaces/quote.interface';
import { useContext } from 'react';
import { QuoteContext } from '../../../stores/quote.context';

const MostRecent: FC = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [stateQuotes, setStateQuotes] = useState<QuoteData[]>([]);
    const { quoteValue } = useContext(QuoteContext);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    const getRecentQuotes = async () => {
        await axios.get('quotes/recent').then((res) => {
            console.log(res.data);
            setStateQuotes(res.data);
        })
    }

    useEffect(() => {
        getRecentQuotes()
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        getRecentQuotes();
    }, [quoteValue])

    let loop: number = 0;

    return (
        <div className='homepage-most-recent'>
            <h2 className='page-title secondary'>Most recent quotes</h2>
            <p>Recent quotes updates as soon user adds new quote. Go ahead show them that you seen the new quote and like the ones you like.</p>
            <div className='quotes-wrap'>
                {stateQuotes.map(quote => {
                    loop++;
                    if (isMobile === true && loop < 5) {
                        if (quote.message === '') {
                            return null
                        } else {
                            return <QuoteBlock key={quote.id} id={quote.id} votes={quote.votes} message={quote.message} user={quote.user} />
                        }
                    } else if (isMobile === false && loop < 10) {
                        if (quote.message === '') {
                            return null
                        } else {
                            return <QuoteBlock key={quote.id} id={quote.id} votes={quote.votes} message={quote.message} user={quote.user} />
                        }
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
