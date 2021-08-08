import { FC, useState } from 'react'
import { QuoteBlock, ProfileMostLiked, ProfileBanner } from '../../components'

const Profile: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return (
        <div className='profile-page'>
            <ProfileBanner />
            <div className='container-lg'>
                <QuoteBlock
                    votes={52}
                    username='Marvin McKinney'
                    image_url='../../assets/images/profile5.png'
                    quote='People will forget what you said. People will forget what you did. But people will never forget how you made them feel.'
                />
                <h3 className='page-title-h3'>Quote</h3>
                <QuoteBlock
                    votes={100}
                    username='John Scott'
                    image_url='../../assets/images/profile5.png'
                    quote='All our dreams can come true, if we have the courage to pursue them.'
                />
                <ProfileMostLiked />
            </div>
        </div>
    )
}

export default Profile
