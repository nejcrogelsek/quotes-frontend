import { Avatar } from '@material-ui/core'
import { FC, useContext } from 'react'
import { QuoteContext } from '../../../stores/quote.context';
import { UserContext } from '../../../stores/user.context';

const Banner: FC = () => {
    const { userValue } = useContext(UserContext);
    const { quoteValue } = useContext(QuoteContext);
    return (
        <div className='profile-banner'>
            <div className='content'>
                <Avatar src={userValue.profile_image} />
                <h2 className='page-title text-center'>{userValue.first_name}{' '}{userValue.last_name}</h2>
                <div className='quote-block quote-block-mini'>
                    <p>Quotastic karma</p>
                    <span>{quoteValue && quoteValue.votes}</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
