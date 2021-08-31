import axios from '../../../api/axios';
import { FC, useEffect, useState } from 'react'
import { QuoteBlock } from '../../'
import { QuoteData } from '../../../interfaces/quote.interface';
import { useContext } from 'react';
import { QuoteContext } from '../../../stores/quote.context';

const ProfileMostLiked: FC = () => {
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

    return (
        <div className='profile-most-liked'>
            <h3 className='page-title-h3 orange'>Likes</h3>
            <div className='quotes-wrap'>
                {stateQuotes.map(quote => {
                    loop++;
                    if (isMobile === true && loop < 5) {
                        if (quote.message === '') {
                            return null
                        } else {
                            return <QuoteBlock key={quote.id} id={quote.id} votes={quote.votes} message={quote.message} user={quote.user} />
                        }
                    } else if (isMobile === false && loop < 7) {
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

export default ProfileMostLiked
