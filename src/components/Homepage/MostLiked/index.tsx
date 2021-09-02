import { motion } from 'framer-motion'
import { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { QuoteBlock } from '../..'
import axios from '../../../api/axios'
import { QuoteData } from '../../../interfaces/quote.interface'
import { QuoteContext } from '../../../stores/quote.context'

interface Props {
    text: string;
}

const MostLiked: FC<Props> = ({ text }: Props) => {
    const [isMobile, setIsMobile] = useState(true);
    const [limit, setLimit] = useState(6);
    const { quoteValue } = useContext(QuoteContext)
    const [stateQuotes, setStateQuotes] = useState<QuoteData[]>([]);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
            setLimit(6);
        } else {
            setIsMobile(false);
            setLimit(9);
        }
    };

    const setMostLikedQuotes = async () => {
        await axios.get('/quotes/liked').then((res) => {
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
        <div className={text === 'signup' ? 'homepage-most-liked signup' : 'homepage-most-liked'}>
            <h2 className='page-title secondary'>Most liked quotes</h2>
            <p>Most liked quotes on the platform.  Sign up or login to like the quotes  and keep them saved in your profile.</p>
            <div className='quotes-wrap'>
                {stateQuotes.slice(0, limit).map(quote => {
                    if (quote.message === '') {
                        return null
                    } else {
                        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={quote.id}><QuoteBlock id={quote.id} votes={quote.votes} message={quote.message} user={quote.user} /></motion.div>
                    }
                })}
            </div>
            {text === 'signup' ? <Link to='signup' className='btn site-btn btn-light signup'>Sign up to see more</Link> : <button className='btn site-btn btn-light load-more' onClick={showMoreQuotes}>Load more</button>}
        </div>
    )
}

export default MostLiked
