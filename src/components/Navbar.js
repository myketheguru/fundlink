import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ArrowIcon from './icons/ArrowIcon'
import LinkIcon from './icons/LinkIcon'
import SearchIcon from './icons/SearchIcon'
import MoonIcon from './icons/MoonIcon'
import BellIcon from './icons/BellIcon'
import PlusIcon from './icons/PlusIcon'
import ProfileImage from '../assets/images/10.jpg'
import './css/nav.css'
import MenuIcon from './icons/MenuIcon'

const Navbar = ({ toggleProfile }) => {
    const inputFocusRef = useRef();
    const menuBtnRef = useRef();
    const logoRef = useRef();
    // const [toggleSidebar, setToggleSidebar] = useState(false);



    useEffect(() => {
        function handleResize() {
            if (window.outerWidth > 650) {
                menuBtnRef.current.style.display = "none";
            } else {
                menuBtnRef.current.style.display = "inline-block";
            }
        }     
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        logoRef.current.querySelector('span').hidden = true;
    }, [])

    const focusInput = () => {
        inputFocusRef.current && inputFocusRef.current.focus();
    }
    return (
        <nav>
            {/* Left */}
            <div className="left">
                <Link to="/" id="logo" ref={logoRef}>
                    <LinkIcon />
                    <span>Fundlink Finance</span>
                </Link>

                <div id="trend">
                    <span>
                        <ArrowIcon />
                    </span>
                    <p>+3,08%</p>
                </div>
            </div>
            {/* Search */}
            <form onSubmit={e => e.preventDefault()}>
                <button onClick={focusInput}><SearchIcon /></button>
                <input 
                    type="text" 
                    ref={inputFocusRef} 
                    onFocus={e => {
                        e.target.style.width = '215px';
                        e.target.parentElement.style.backgroundColor = '#2a2a3b';
                    }} 
                    onBlur={e => {
                        e.target.style.width = '0px';
                        e.target.parentElement.style.backgroundColor = 'transparent';
                    }} 
                     />
            </form>
            {/* Right */}
            <div className="right">
                <button id="mode">
                    <MoonIcon />
                </button>
                <button id="notification-btn">
                    <BellIcon />
                </button>
                <div className="profile" onClick={toggleProfile}>
                    <div className="image">
                        <img src={ProfileImage} alt="Profile" />
                    </div>
                    <span>
                        <PlusIcon />
                    </span>
                </div>
                <button ref={menuBtnRef} id="menu-btn">
                    <MenuIcon />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
