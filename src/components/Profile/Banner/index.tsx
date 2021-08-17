import { Avatar } from '@material-ui/core'
import { FC } from 'react'

const Banner: FC = () => {
    return (
        <div className='profile-banner'>
            <div className="content">
                <Avatar />
                <h2 className='page-title text-center'>John Scott</h2>
                <div className="quote-block quote-block-mini">
                    <p>Quotastic karma</p>
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
