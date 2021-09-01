import axios from '../../../api/axios';
import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../../'
import { QuoteData } from '../../../interfaces/quote.interface';
import { useContext } from 'react';
import { QuoteContext } from '../../../stores/quote.context';
import { motion } from 'framer-motion';

const ProfileMostLiked: FC = () => {
    const [isMobile, setIsMobile] = useState(true);
    const [limit, setLimit] = useState(4);
    const { quoteValue } = useContext(QuoteContext)
    const [stateQuotes, setStateQuotes] = useState<QuoteData[]>([]);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
            setLimit(4);
        } else {
            setIsMobile(false);
            setLimit(6);
        }
    };

    const setMostLikedQuotes = async () => {
        await axios.get('/quotes/liked').then((res) => {
            setStateQuotes(res.data);
        })
    }

    const showMoreQuotes = () => {
        if (isMobile) {
            setLimit(limit + 4);
        } else {
            setLimit(limit + 6);
        }
    }

    useEffect(() => {
        setMostLikedQuotes();
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        setMostLikedQuotes();
    }, [quoteValue])

    return (
        <div className='profile-most-liked'>
            <h3 className='page-title-h3 orange'>Likes</h3>
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

export default ProfileMostLiked
