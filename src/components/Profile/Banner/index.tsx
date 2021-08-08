import { Avatar } from '@material-ui/core'
import { FC } from 'react'
import BackgroundUrl from '../../../assets/images/profile_banner.png'

const Banner: FC = () => {
    return (
        <div className='profile-banner'>
            <img src={BackgroundUrl} alt='' />
            <div className="content">
                <Avatar />
                <h2 className='page-title'>John Scott</h2>
                <div className="quote-block quote-block-mini">
                    <p>Quotastic karma</p>
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
