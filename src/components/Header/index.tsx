import { FC, useContext, useEffect, useState } from 'react'
import { Logo } from '..'
import { Menu, Add } from '@material-ui/icons'
import { DesktopNav, MobileNav } from '..'
import { AddQuoteModal, SettingsModal } from '..'
import { UserContext } from '../../stores/user.context'

const Header: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const [toggle, setToggle] = useState(false);
    const { userValue, setUserValue } = useContext(UserContext)

    const checkIfMobile = () => {
        if (window.innerWidth < 992) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const toggleNav = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg' aria-label='Fourth navbar example'>
                <div className='container-fluid'>
                    <div className='header-buttons'>
                        <button onClick={() => toggleNav()} className='navbar-toggler collapsed' type='button'>
                            <Menu />
                        </button>
                        <Logo />
                        {userValue && isMobile ?
                            <button className='navbar-toggler add-quote' type='button' data-bs-toggle='modal' data-bs-target='#addQuoteModal'>
                                <Add />
                            </button> : null}
                    </div>
                    {isMobile ?
                        <MobileNav user={userValue} setUserValue={setUserValue} toggleNav={toggleNav} toggle={toggle} />
                        : <DesktopNav user={userValue} setUserValue={setUserValue} />
                    }
                </div>
            </nav>
            <AddQuoteModal />
            <SettingsModal />
        </>
    )
}

export default Header
