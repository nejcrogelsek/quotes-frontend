import { Avatar } from '@material-ui/core'
import { FC, useContext, useEffect, useState } from 'react'
import { QuoteContext } from '../../../stores/quote.context';
import { UserContext } from '../../../stores/user.context';

const Banner: FC = () => {
    const { userValue } = useContext(UserContext);
    const { quoteValue } = useContext(QuoteContext);
    const [numVotes, setNumVotes] = useState<number | null>(null)
    useEffect(() => {
        if (quoteValue && quoteValue.votes) {
            setNumVotes(quoteValue.votes.length);
        }
    }, [quoteValue])
    return (
        <div className='profile-banner'>
            <div className='content'>
                <Avatar src={userValue.profile_image} />
                <h2 className='page-title text-center'>{userValue.first_name}{' '}{userValue.last_name}</h2>
                <div className='quote-block quote-block-mini'>
                    <p>Quotastic karma</p>
                    <span>{numVotes ? numVotes : 0}</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
