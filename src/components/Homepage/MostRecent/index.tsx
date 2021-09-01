import axios from '../../../api/axios';
import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../..'
import { QuoteData } from '../../../interfaces/quote.interface';
import { useContext } from 'react';
import { QuoteContext } from '../../../stores/quote.context';
import { motion } from 'framer-motion';

const MostRecent: FC = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [limit, setLimit] = useState(6);
    const [stateQuotes, setStateQuotes] = useState<QuoteData[]>([]);
    const { quoteValue } = useContext(QuoteContext);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
            setLimit(6);
        } else {
            setIsMobile(false);
            setLimit(9);
        }
    };

    const getRecentQuotes = async () => {
        await axios.get('quotes/recent').then((res) => {
            setStateQuotes(res.data);
        })
    }

    const showMoreQuotes = () => {
        if (isMobile) {
            setLimit(limit + 6);
        } else {
            setLimit(limit + 9);
        }
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

    return (
        <div className='homepage-most-recent'>
            <h2 className='page-title secondary'>Most recent quotes</h2>
            <p>Recent quotes updates as soon user adds new quote. Go ahead show them that you seen the new quote and like the ones you like.</p>
            <div className='quotes-wrap'>
                {stateQuotes.slice(0, limit).map(quote => {
                    if (quote.message === '') {
                        return null
                    } else {
                        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={quote.id}><QuoteBlock id={quote.id} votes={quote.votes} message={quote.message} user={quote.user} /></motion.div>
                    }
                })}
            </div>
            <button className='btn site-btn btn-light load-more' onClick={showMoreQuotes}>Load more</button>
        </div>
    )
}

export default MostRecent
