import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        });
    }, []);

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image
                    src={assets.header_bg_color}
                    alt=""
                    className="w-full "
                />
            </div>
            <nav
                className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
                    isScroll
                        ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shado-white/20'
                        : ''
                }`}
            >
                <button
                    onClick={() => setIsDarkMode((prevState) => !prevState)}
                >
                    <Image
                        src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                        alt=""
                        className="w-6 mr-16"
                    />
                </button>
                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
                        isScroll
                            ? ''
                            : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
                    } `}
                >
                    <li className="hover:scale-110 hover:font-bold transition-transform">
                        <a href="#top" className="font-Ovo">
                            Home
                        </a>
                    </li>
                    <li className="hover:scale-110 hover:font-bold transition-transform">
                        <a href="#about" className="font-Ovo hover:scale-110">
                            About me
                        </a>
                    </li>
                    <li className="hover:scale-110 hover:font-bold transition-transform">
                        <a
                            href="#services"
                            className="font-Ovo hover:scale-110"
                        >
                            Services
                        </a>
                    </li>
                    <li className="hover:scale-110 hover:font-bold transition-transform">
                        <a href="#work" className="font-Ovo hover:scale-110">
                            My Work
                        </a>
                    </li>
                    <li className="hover:scale-110 hover:font-bold transition-transform">
                        <a href="#contact" className="font-Ovo hover:scale-110">
                            Contac me
                        </a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <a
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
                        href="#contact"
                    >
                        Contact
                        <Image
                            src={
                                isDarkMode
                                    ? assets.arrow_icon_dark
                                    : assets.arrow_icon
                            }
                            alt=""
                            className="w-3"
                        />
                    </a>
                    <button className="block md:hidden ml-3">
                        <Image
                            src={
                                isDarkMode
                                    ? assets.menu_white
                                    : assets.menu_black
                            }
                            alt=""
                            className="w-6"
                            onClick={toggleMenu}
                        />
                    </button>
                </div>

                {/* ------Mobile Menu---- */}
                <ul
                    className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 -right-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white ${
                        !isMenuOpen ? 'translate-x-0' : '-translate-x-64'
                    }`}
                >
                    <div className="absolute right-6 top-6 ">
                        <Image
                            src={
                                isDarkMode
                                    ? assets.close_white
                                    : assets.close_black
                            }
                            alt=""
                            className="w-5 cursor-pointer"
                            onClick={toggleMenu}
                        />
                    </div>
                    <li>
                        <a
                            href="#top"
                            className="font-Ovo"
                            onClick={toggleMenu}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="font-Ovo"
                            onClick={toggleMenu}
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="font-Ovo"
                            onClick={toggleMenu}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#work"
                            className="font-Ovo"
                            onClick={toggleMenu}
                        >
                            My Work
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="font-Ovo"
                            onClick={toggleMenu}
                        >
                            Contac me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
