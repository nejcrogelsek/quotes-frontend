import { FC } from 'react'
import { ProfileMostLiked, ProfileBanner, ProfileQuoteBlock } from '../../components'

const Profile: FC = () => {
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
