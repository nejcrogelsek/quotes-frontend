import { Avatar } from '@material-ui/core'
import { FC } from 'react'
import { UserProps } from '../../../interfaces/auth.interface'

const Banner: FC<UserProps> = ({ user }: UserProps) => {
    return (
        <div className='profile-banner'>
            <div className="content">
                <Avatar />
                <h2 className='page-title text-center'>{user.first_name}{' '}{user.last_name}</h2>
                <div className="quote-block quote-block-mini">
                    <p>Quotastic karma</p>
                    <span>100</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
