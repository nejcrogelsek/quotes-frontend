import { FC, useContext } from 'react'
import { ProfileMostLiked, ProfileBanner, ProfileQuoteBlock, QuoteBlock } from '../../components'
import { QuoteContext } from '../../stores/quote.context';

const Profile: FC = () => {
    const { quoteValue } = useContext(QuoteContext)
    return (
        <div className='profile-page'>
            <ProfileBanner />
            <div className='container-lg'>
                <div className="my-quote">
                    <h3 className='page-title-h3 orange'>Quote</h3>
                    {
                        quoteValue && <QuoteBlock id={quoteValue.id} votes={quoteValue.votes} message={quoteValue.message} user={quoteValue.user} />
                    }
                </div>
                <ProfileMostLiked />
            </div>
        </div>
    )
}

export default Profile
