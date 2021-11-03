import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar(){
    const[click,setClick]=useState(false);
    const[button,setButton]=useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <img src="https://i.ibb.co/TbLXYQQ/unnamed.png" width="20%" height="20%"></img>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click?'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                            Register
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Logout
                        </Link>
                    </li>
                    </ul>
              
            </div>
        </nav>
        </>
    )
}
export default Navbar;