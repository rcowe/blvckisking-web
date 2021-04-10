import { useState } from 'react';
import { Link } from 'react-router-dom';
// import Button from '../components/reuse/Button';
import './NavBar.css';
import { makeStyles } from "@material-ui/core";

const styles = {
    logo: {
        height: 70,
        width: 70
    },
    navbar_background: {
        background: "linear-gradient(45deg, #613395 30%, #713395 90%)"
    }
}

const useStyles = makeStyles(styles);

function Navbar() {
    const classes = useStyles();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar' className={classes.navbar_background}>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img alt="logo" className={classes.logo} src="//res.cloudinary.com/di5thiyyl/image/upload/v1618047220/blvckisking-images/logo_unzh2c.png" />
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
                                About & Contact
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
