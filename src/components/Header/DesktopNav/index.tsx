import { Avatar } from '@material-ui/core'
import { Add, Close } from '@material-ui/icons'
import { FC } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import profileUrl from '../../../assets/images/profile_picture.png'

interface Props {
    isAuthenticated: boolean;
}

const DesktopNav: FC<Props> = ({ isAuthenticated }: Props) => {
    const history = useHistory();


    const signout = () => {
        console.log('HEADER DESKTOP SIGN OUT');
        history.push('/');
    }

    return (
        <ul className={isAuthenticated ? 'navbar-nav isAuth' : 'navbar-nav'}>
            {isAuthenticated ?
                <>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/' >
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link' type='button' data-bs-toggle='modal' data-bs-target='#settingsModal'>
                            <span>Settings</span>
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button onClick={() => signout()} className='nav-link' >
                            <span>Logout</span>
                        </button>
                    </li>
                    <li className='nav-item user-item'>
                        <NavLink to='/me'>
                            <Avatar src={profileUrl} />
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <button className='add-quote' type='button' data-bs-toggle='modal' data-bs-target='#addQuoteModal'>
                            <Add />
                        </button>
                    </li>
                </> :
                <>
                    <li className='nav-item'>
                        <NavLink className='btn site-btn btn-orange' to='/signup' >Sign up</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='btn site-btn btn-light' to='/login' >Login</NavLink>
                    </li>
                </>
            }
        </ul>
    )
}

export default DesktopNav
