import { FC } from 'react'
import { RegisterForm } from '../../components'
import QuotesUrl from '../../assets/images/quotes.svg'

const Register: FC = () => {
    return (
        <div className="register-page">
            <div className="content">
                <h1 className="page-title text-center">What is your <span>name?</span></h1>
                <p>Your name will appear on quotes and your public profile.</p>
                <RegisterForm />
            </div>
            <img className='background-image' src={QuotesUrl} alt='Quotes' />
        </div>
    )
}

export default Register
