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
            <svg className='background-image' width="706" height="478" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M385.563 3v317.8h126.67c0 70.211-49.742 156.685-126.935 185.84L416.85 575C583.804 541.878 703 419.042 703 237.896V3H385.563zm285.621 234.896c0 148.883-89.894 262.001-236.342 300.412v-.132l-7.673-16.462c76.135-44.229 116.815-132.158 116.815-200.914V289H417.379V34.8h253.805v203.096zM-60 3v317.8H67.2c0 70.211-49.742 156.685-126.935 185.84L-28.183 575c166.953-33.122 285.62-155.958 285.62-337.104V3H-60zm285.621 234.896c0 148.95-89.695 262.133-235.813 300.346l-7.673-16.462C58.204 477.551 98.95 389.622 98.95 320.866v-31.8H-28.183V34.8H225.62v203.096z" fill="url(#paint0_linear)" fill-opacity=".28" stroke="#DE8667" stroke-opacity=".05" stroke-width="5" /><defs><linearGradient id="paint0_linear" x1="-60" y1="289.018" x2="703.004" y2="289.018" gradientUnits="userSpaceOnUse"><stop stop-color="#DE8667" /><stop offset="1" stop-color="#EFB467" /></linearGradient></defs></svg>
        </div>
    )
}

export default Login
