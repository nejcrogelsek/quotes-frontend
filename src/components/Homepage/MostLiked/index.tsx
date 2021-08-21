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
    const { quoteValue } = useContext(QuoteContext)
    const [stateQuotes, setStateQuotes] = useState<QuoteData[]>([]);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    const setMostLikedQuotes = async () => {
        await axios.get('/quotes').then((res) => {
            setStateQuotes(res.data);
        })
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

    let loop: number = 0;

    console.log(stateQuotes);

    return (
        <div className={text === 'signup' ? 'homepage-most-liked signup' : 'homepage-most-liked'}>
            <h2 className='page-title secondary'>Most liked quotes</h2>
            <p>Most liked quotes on the platform.  Sign up or login to like the quotes  and keep them saved in your profile.</p>
            <div className='quotes-wrap'>
                {stateQuotes.map(quote => {
                    loop++;
                    if (isMobile === true && loop < 5) {
                        return null
                    } else if (isMobile === false && loop < 10) {
                        return <QuoteBlock key={quote.id} id={quote.id} votes={quote.votes} message={quote.message} user={quote.user} />
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
