import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
    },

    logo: {
        fontSize: '1.5em',
        fontWeight: 'bold',
    },

    navLinks: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
    },

    navItem: {
        marginLeft: '10px',
    },

    dropdown: {
        position: 'relative',
    },

    dropdownContent: {
        display: 'none',
        position: 'absolute',
        backgroundColor: '#f9f9f9',
        minWidth: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: 1,
    },

    dropdownLink: {
        color: 'black',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
        ':hover': {
            backgroundColor: '#f1f1f1'
        }
    },

    showDropdown: {
        display: 'block',
    }
    
});

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header>
            <nav className={css(styles.nav)}>
                <div className={css(styles.logo)}>4Life Mentorship</div>
                <ul className={css(styles.navLinks)}>
                    <li className={css(styles.navItem)}><a href="#home">Home</a></li>
                    <li className={css(styles.navItem, styles.dropdown)} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                        <a href="#features">Features</a>
                        <div className={css(styles.dropdownContent, showDropdown && styles.showDropdown)}>
                            <Link to="/mentee" className={css(styles.dropdownLink)}>Mentee</Link>
                            {/* Add other dropdown links if needed */}
                        </div>
                    </li>
                    <li className={css(styles.navItem)}><a href="#about">About</a></li>
                    <li className={css(styles.navItem)}><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;