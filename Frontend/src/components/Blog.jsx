// import React, { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import { Link } from "react-scroll"; // For smooth scrolling navigation
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Corrected to remove the event listener
        };
    }, []);

    // navitems
    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" },
    ];

    return (
        <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
            <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""}`}>
                <div className="flex justify-between items-center text-base gap-8">
                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={logo} alt="" className="w-10 inline-block items-center" />
                        <span className="text-[#FFC107]">Mentorship</span>
                    </a>

                    <ul className="md:flex space-x-12 hidden">
                        {
                            navItems.map(({ link, path }) => (
                                <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray900 hover:text-brandPrimary first:font-medium">
                                    {link}
                                </Link>
                            ))
                        }
                    </ul>

                    <div className='space-x-2 hidden lg:flex items-center'>
                        <RouterLink to="/login" className='text-brandPrimary hover:text-gray900'>Login</RouterLink>
                        <a href="https://your-signup-page-url.com" target="_blank" rel="noopener noreferrer" className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
                            Sign up
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-neutralDGrey focus:outline-none focus:text-gray-500">
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBars className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                {/* Mobile view */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => (
                            <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-white hover:text-brandPrimary first:font-medium">
                                {link}
                            </Link>
                        ))
                    }
                    <RouterLink to="/login" className='block text-base text-white hover:text-brandPrimary'>Login</RouterLink>
                    <a href="https://your-signup-page-url.com" target="_blank" rel="noopener noreferrer" className='block text-base text-white hover:text-brandPrimary'>Sign up</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;