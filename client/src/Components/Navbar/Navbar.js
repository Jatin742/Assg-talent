import React, { Fragment, useState } from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NewNav = () => {
    const [searchBoxActive, setSearchBoxActive] = useState(false);
    const handleSearchBoxActive = () => {
        setSearchBoxActive(!searchBoxActive);
        // setBurgerMenuActive(false);
    }
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);
    const handleBurgerMenuActive = () => {
        setBurgerMenuActive(!burgerMenuActive);
        // setSearchBoxActive(false);
    }
    const handleLinkClick = () => {
        setSearchBoxActive(false);
        setBurgerMenuActive(false);
    }
    return (
        <Fragment>
            <div className="navContainer">
                <div className={`nav ${burgerMenuActive ? "open-nav" : ""}`}>
                    <div className="menu-bars" onClick={handleBurgerMenuActive}>
                        {!burgerMenuActive ? (
                            <GiHamburgerMenu />
                        ) : (
                            <FaTimes />
                        )
                        }
                    </div>
                    <div className="logo"><Link to="/">Logo</Link></div>

                    <div className="content">

                        <div className={`nav-items-box ${searchBoxActive ? "active" : ""}`}>
                            <ul className='nav-items'>
                                <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                                <li><Link to="/" onClick={handleLinkClick}>Products</Link></li>
                                <li><Link to="/" onClick={handleLinkClick}>About Us</Link></li>
                                <li><Link to="/login" onClick={handleLinkClick}>SignIn</Link></li>
                            </ul>
                        </div>
                        <form action="" className={`search-form ${searchBoxActive ? "active" : ""}`}>
                            <input type="text" placeholder="Seach Here" />
                            <div className="button" onClick={handleSearchBoxActive}><FaTimes className='search-icon' /></div>
                        </form>

                    </div>

                    <div className="search-icon" onClick={handleSearchBoxActive}>
                        <FiSearch />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewNav