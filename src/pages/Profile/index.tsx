import { FC, useContext } from 'react'
import { ProfileMostLiked, ProfileBanner, ProfileQuoteBlock } from '../../components'
import { UserContext } from '../../stores/user.context'

const Profile: FC = () => {
    const { userValue } = useContext(UserContext);
    return (
        <div className='profile-page'>
            <ProfileBanner user={userValue} />
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
