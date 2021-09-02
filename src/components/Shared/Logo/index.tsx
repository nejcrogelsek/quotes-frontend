import { FC } from 'react'
import { Link } from 'react-router-dom'
import LogoUrl from '../../../assets/images/logo.png'

const Logo: FC = () => {
    return (
        <Link className='navbar-brand' to='/'><img src={LogoUrl} alt="Quotastic" /></Link>
    )
}

export default Logo
