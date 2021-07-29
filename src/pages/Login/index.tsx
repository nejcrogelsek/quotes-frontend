import { FC } from 'react'
import { LoginForm } from '../../components'

export type Profile = {
    username: string;
    password: string;
}

const Login: FC = () => {
    return (
        <div className="login-page">
            <h1 className="page-title text-center">Welcome <span>back!</span></h1>
            <p>Thank you for coming back. Hope you have a good day and inspire others.</p>
            <LoginForm />
        </div>
    )
}

export default Login
