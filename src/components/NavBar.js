import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from '../components/reuse/Button';
import './NavBar.css';

function Navbar() {
    const [click, setClick] = useState(false);

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
                            <Link to='/'
                                  className='nav-links'
                                  onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/submit'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Submit A Story
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/references'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                References
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/contact'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/*<Link>*/}
                    {/*    <Button>*/}

                    {/*    </Button>*/}
                    {/*</Link>*/}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
