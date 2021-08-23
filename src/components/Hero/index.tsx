import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { QuoteBlock } from '..'
import staticData from '../../assets/db/quotes.json';
import { IStaticData } from '../../interfaces/app.interface';

const Hero: FC = () => {
    const [data, setData] = useState<IStaticData>([]);
    useEffect(() => {
        setData(staticData);
    }, [])
    return (
        <div className='hero-section'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h1 className='page-title main-title'>Welcome <span>to <span>Quotastic</span></span></h1>
                    <p>Quotastic is free online platform for you to explore the  quips, quotes, and proverbs. Sign up and express yourself.</p>
                    <Link to='/signup' className='btn site-btn btn-orange w-137'>Sign up</Link>
                </div>
                <div className='col-lg-6'>
                    <div className="hero-quotes-wrap">
                        {data.map(({ id, votes, message, user }) => (
                            <QuoteBlock
                                key={id}
                                id={id}
                                votes={votes}
                                message={message}
                                user={user}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
