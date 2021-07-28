import { FC } from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    return (
        <nav className='navbar navbar-dark bg-dark' aria-label='First navbar example'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='#'>Never expand</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarsExample01' aria-controls='navbarsExample01' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarsExample01'>
                    <ul className='navbar-nav me-auto mb-2'>
                        <li className='nav-item'>
                            <Link className='nav-link active' aria-current='page' to='#'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='#'>Link</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link disabled' to='#' aria-disabled='true'>Disabled</Link>
                        </li>
                        <li className='nav-item dropdown'>
                            <Link className='nav-link dropdown-toggle' to='#' id='dropdown01' data-bs-toggle='dropdown' aria-expanded='false'>Dropdown</Link>
                            <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                                <li><Link className='dropdown-item' to='#'>Action</Link></li>
                                <li><Link className='dropdown-item' to='#'>Another action</Link></li>
                                <li><Link className='dropdown-item' to='#'>Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form>
                        <input className='form-control' type='text' placeholder='Search' aria-label='Search' />
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header
