import { FC } from 'react'
import { LoginForm } from '../../components'
import QuotesUrl from '../../assets/images/quotes.svg'

export type Profile = {
    username: string;
    password: string;
}

const Login: FC = () => {
    return (
        <div className="login-page">
            <div className="content">
                <h1 className="page-title text-center">Welcome <span>back!</span></h1>
                <p>Thank you for coming back. Hope you have a good day and inspire others.</p>
                <LoginForm />
            </div>
            <img className='background-image' src={QuotesUrl} alt='Quotes' />
        </div>
    )
}

export default Login
