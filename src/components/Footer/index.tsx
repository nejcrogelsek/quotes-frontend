import { FC } from 'react'
import LogoIconUrl from '../../assets/images/quotastic_logo_icon.svg'

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <img src={LogoIconUrl} alt='Quotastic' />
                <p>All Rights Reserved | skillupmentor.com</p>
            </div>
        </footer>
    )
}

export default Footer
