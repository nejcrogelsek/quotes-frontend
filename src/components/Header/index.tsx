import { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '..'
import { Avatar } from '@material-ui/core'
import { Menu, Add, Close, ChevronRight } from '@material-ui/icons'

const Header: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [toggle, setToggle] = useState(false);

    const signout = () => {
        console.log('HEADER SIGN OUT');
    }

    const toggleNav = () => {
        setToggle(!toggle);
    }

    return (
        <nav className='navbar navbar-expand-md' aria-label='Fourth navbar example'>
            <div className='container-fluid'>
                <div className="header-buttons">
                    <button onClick={() => toggleNav()} className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#navbarsExample04' aria-controls='navbarsExample04' aria-expanded='false' aria-label='Toggle navigation'>
                        {toggle ? <Close className="orange" /> : <Menu />}
                    </button>
                    <Logo />
                    {isAuthenticated ?
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarsExample04' aria-controls='navbarsExample04' aria-expanded='false' aria-label='Toggle navigation'>
                            <Add />
                        </button> : null}
                </div>
                <div className='collapse navbar-collapse' id='navbarsExample04'>
                    <ul className='navbar-nav me-auto mb-2 mb-md-0'>
                        {isAuthenticated ?
                            <>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' aria-current='page' to='/'>Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/me'>Settings</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <button onClick={() => signout()} className='nav-link' aria-disabled='true'>Logout</button>
                                </li>
                            </> :
                            <>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/'><span>Home</span><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.09247 15.9979C1.82603 15.9985 1.56782 15.9057 1.36266 15.7357C1.24719 15.6399 1.15174 15.5224 1.08178 15.3897C1.01182 15.257 0.968721 15.1118 0.95495 14.9625C0.94118 14.8131 0.95701 14.6625 1.00153 14.5193C1.04606 14.3761 1.1184 14.243 1.21442 14.1278L6.32309 8.01564L1.39687 1.89208C1.30215 1.77543 1.23141 1.64122 1.18873 1.49715C1.14604 1.35308 1.13225 1.202 1.14815 1.05259C1.16404 0.90317 1.20931 0.75837 1.28135 0.626506C1.35339 0.494642 1.45078 0.378315 1.56792 0.284212C1.6859 0.180401 1.82407 0.102097 1.97375 0.0542161C2.12344 0.00633482 2.2814 -0.0100901 2.43773 0.00597127C2.59406 0.0220327 2.74539 0.070234 2.88221 0.14755C3.01903 0.224867 3.13839 0.329629 3.2328 0.455262L8.74058 7.29723C8.9083 7.50127 8.99999 7.75721 8.99999 8.02134C8.99999 8.28547 8.9083 8.54141 8.74058 8.74545L3.03894 15.5874C2.92455 15.7254 2.77923 15.8345 2.61478 15.9058C2.45034 15.9772 2.27139 16.0087 2.09247 15.9979Z" fill="black" />
                                    </svg>
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='btn site-btn btn-orange' to='/signup'>Sign up</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='btn site-btn btn-light' to='/login'>Login</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
