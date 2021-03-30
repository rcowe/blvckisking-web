import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        BLVCKISKING
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/openletter'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                               An Open Letter
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/submit'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Submit A Story
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/contact'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/references'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                References
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
