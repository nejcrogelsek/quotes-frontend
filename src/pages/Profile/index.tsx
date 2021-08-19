import { FC, useContext } from 'react'
import { ProfileMostLiked, ProfileBanner, ProfileQuoteBlock } from '../../components'
import { QuoteContext } from '../../stores/quote.context';
import { UserContext } from '../../stores/user.context'

const Profile: FC = () => {
    const { userValue } = useContext(UserContext);
    const { quoteValue } = useContext(QuoteContext);
    return (
        <div className='profile-page'>
            <ProfileBanner user={userValue} quote={quoteValue} />
            <div className='container-lg'>
                <div className="my-quote">
                    <h3 className='page-title-h3 orange'>Quote</h3>
                    <ProfileQuoteBlock user={userValue} quote={quoteValue} />
                </div>
                <ProfileMostLiked />
            </div>
        </div>
    )
}

export default Profile
