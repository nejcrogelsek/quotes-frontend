import axios from '../../api/axios';
import { FC, useContext, useEffect, useState } from 'react'
import { Hero, MostLiked, QuoteBlock, MostRecent } from '../../components'
import { UserContext } from '../../stores/user.context';
import { VoteContext } from '../../stores/vote.context';
import { QuoteData } from '../../interfaces/quote.interface';
import { RandomQuoteContext } from '../../stores/random-quote.context';

const Home: FC = () => {
    const { userValue } = useContext(UserContext)
    const { randomQuote } = useContext(RandomQuoteContext);

    return (
        <div className='home-page'>
            <div className='container-lg'>
                {userValue ?
                    <>
                        <h1 className='page-title text-center'><span>Quote of the day</span></h1>
                        <p className='site-text'>Quote of the day is randomly choosen quote.</p>
                        {randomQuote && <QuoteBlock
                            id={randomQuote.id}
                            votes={randomQuote.votes}
                            user={randomQuote.user}
                            message={randomQuote.message}
                        />}
                        <MostLiked text='null' />
                        <MostRecent />
                    </>
                    :
                    <>
                        <Hero />
                        <h2 className='page-title explore-title'>Explore the world of <span>fantastic quotes</span></h2>
                        <MostLiked text='signup' />
                    </>
                }
            </div>
        </div>
    )
}

export default Home
