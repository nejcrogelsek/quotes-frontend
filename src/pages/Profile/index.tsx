import { FC, useState } from 'react'
import { QuoteBlock, ProfileMostLiked, ProfileBanner, ProfileQuoteBlock } from '../../components'

const Profile: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <div className='profile-page'>
            <ProfileBanner />
            <div className='container-lg'>
                <div className="my-quote">
                    <h3 className='page-title-h3 orange'>Quote</h3>
                    <ProfileQuoteBlock />
                </div>
                <ProfileMostLiked />
            </div>
        </div>
    )
}

export default Profile
