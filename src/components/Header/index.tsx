import { FC, useEffect, useState } from 'react'
import { Logo } from '..'
import { Menu, Add } from '@material-ui/icons'
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

const Header: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [toggle, setToggle] = useState(false);

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    const toggleNav = () => {
        setToggle(!toggle);
    }

    return (
        <nav className='navbar navbar-expand-lg' aria-label='Fourth navbar example'>
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
                {isMobile ?
                    <MobileNav isAuthenticated={isAuthenticated} toggleNav={toggleNav} toggle={toggle} />
                    : <DesktopNav isAuthenticated={isAuthenticated} />
                }
            </div>
        </nav>
    )
}

export default Header
