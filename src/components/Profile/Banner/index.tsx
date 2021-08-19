import { Avatar } from '@material-ui/core'
import { FC } from 'react'
import { AppProps } from '../../../interfaces/app.interface'

const Banner: FC<AppProps> = ({ user, quote }: AppProps) => {
    return (
        <div className='profile-banner'>
            <div className='content'>
                <Avatar src={user.profile_image} />
                <h2 className='page-title text-center'>{user.first_name}{' '}{user.last_name}</h2>
                <div className='quote-block quote-block-mini'>
                    <p>Quotastic karma</p>
                    <span>{quote && quote.votes}</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
