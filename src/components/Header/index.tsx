import { FC, useState } from 'react'
import { Logo } from '..'
import { Menu, Add } from '@material-ui/icons'
import MobileNav from './MobileNav'

const Header: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle);
    }

    return (
        <nav className='navbar navbar-expand-md' aria-label='Fourth navbar example'>
            <div className='container-fluid'>
                <div className="header-buttons">
                    <button onClick={() => toggleNav()} className='navbar-toggler collapsed' type='button'>
                        <Menu />
                    </button>
                    <Logo />
                    {isAuthenticated ?
                        <button className='navbar-toggler add-quote' type='button'>
                            <Add />
                        </button> : null}
                </div>
                <MobileNav isAuthenticated={isAuthenticated} toggleNav={toggleNav} toggle={toggle} />
            </div>
        </nav>
    )
}

export default Header
