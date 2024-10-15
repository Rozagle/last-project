// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";

const navLinks = [
    { path: 'hero', key: 'hero' },
    { path: 'about', key: 'about' },
    { path: 'ourexpertise', key: 'ourexpertise' },
    { path: 'client', key: 'client' },
    { path: 'teams', key: 'teams' },
    { path: 'contactus', key: 'contactus' },
];

function Navbar() {
    const [menuOpenDesk, setMenuOpenDesk] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('selectedLanguage') || 'tr');
    const { t, i18n } = useTranslation();
    const [selectLanguage, setSelectLanguage] = useState(false);
    const dropdownRef = useRef(null);
    const [navbarBackground, setNavbarBackground] = useState('transparent');


    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
        document.title = t('title');
    }, [currentLanguage, i18n]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setMenuOpenDesk(false);
                setIsSvgClicked(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        function handleScroll() {  
            if (window.scrollY > 360) { 
                setNavbarBackground('black'); // Background turns black when scrolled past 380px
            } else {
                setNavbarBackground('transparent'); // Otherwise, it's transparent
            }
    
            setMenuOpenDesk(false);
            setMenuOpen(false);
            setIsSvgClicked(false);
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrentLanguage(lng);
        localStorage.setItem('selectedLanguage', lng);
        setMenuOpenDesk(false);
        setIsSvgClicked(false);
        setSelectLanguage(false);
    };

    const [isSvgClicked, setIsSvgClicked] = useState(false);
    const [isSvg1Hovered, setIsSvg1Hovered] = useState(false);

    const handleClickSvg = () => {
        setIsSvgClicked(!isSvgClicked);
    };

    const handleSvg1MouseEnter = () => {
        setIsSvg1Hovered(true);
    };

    const handleSvg1MouseLeave = () => {
        setIsSvg1Hovered(false);
    };

    const toggleSelectLanguage = () => {
        setSelectLanguage(!selectLanguage);
    };

    return (
        <div className={`navbar absolute lg:fixed top-0 left-0 right-0 bg-transparent z-50 transition-all duration-300` } style={{ backgroundColor: navbarBackground }}>

            <div className="navigationBar text-white flex justify-between items-center h-16 max-w-[1450px] desktopUltraWide:h-80 desktopUltraWide:max-w-[4050px] desktopLarge:h-56 desktopLarge:max-w-[2850px]  desktopMedium:h-28 desktopMedium:max-w-[1950px] desktopSmall:h-28 desktopSmall:max-w-[1640px] lg:max-w-[1450px] mx-auto px-5 relative">
                <div className="select-none w-36 h-36 desktopUltraWide:w-[800px] desktopUltraWide:h-[800px] desktopLarge:w-[500px] desktopLarge:h-[500px] desktopMedium:w-[250px] desktopMedium:h-[250px] desktopSmall:w-[250px] desktopSmall:h-[250px] lg:w-44 lg:h-44 sm:w-[190px] sm:h-[190px] xsm:w-40 xsm:h-40 xxs:w-[140px] xxs:h-[140px] lg:pt-6 sm:pt-4 xsm:pt-3 relative flex items-center">
                    <img
                        className="select-none w-36 h-36 desktopUltraWide:w-[800px] desktopUltraWide:h-[800px] desktopUltraWide:mr-44 desktopLarge:w-[500px] desktopLarge:h-[500px] desktopMedium:w-[250px] desktopMedium:h-[250px] desktopSmall:w-[250px] desktopSmall:h-[250px] desktopLarge:pt-4 lg:mb-5 lg:w-36  lg:h-28 sm:w-[160px] sm:h-[160px]  xsm:w-40 xsm:h-40 xs:w-[140px] xs:h-[140px] xxs:w-[120px] xxs:h-[120px]  mr-2"
                        alt=""
                        src="/siyesoNavbar.svg"
                    />
                </div>

                {/* Menu Icon for Mobile screen */}
                <div className="lg:hidden flex items-center justify-end mr-0 ml-10">
                    {menuOpen ? (
                        <IoClose size={30} onClick={toggleMenu} />
                    ) : (
                        <IoMenuOutline size={30} onClick={toggleMenu} />
                    )}
                </div>

                {/* Dropdown Menu for Mobile */}
                <div className={`lg:hidden fixed mt-6 top-8 right-0 items-center shadow w-58 bg-black bg-opacity-5 backdrop-blur-lg flex flex-col rounded-lg transition-all duration-500 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="menu py-2 text-sm dark:text-gray-900 capitalize" aria-labelledby="dropdownDefaultButton">
                        {navLinks.map((item, index) => (
                            <li key={index} className="menu_items p-2 text-center">
                                <Link
                                    key={item.key}
                                    to={item.path}
                                    duration={500}
                                    className="menu-link block space-y-2 hover:bg-white hover:text-primary text-black py-2 px-14 mb-2 rounded">{t(item.key)}</Link>
                            </li>
                        ))}
                    </ul>

                    <button onClick={toggleSelectLanguage} className="btnmenu_items text-sm text-center">
                        <h1 className=' block py-2 px-16 mb-2 space-y-2 rounded text-black text-center font-modern capitalize group-hover:bg-white group-hover:text-primary hover:bg-white hover:text-primary'>{t('NavbarPage.Selectelanguage')}</h1>
                    </button>

                    {selectLanguage && (
                        <ul className="menu text-sm dark:text-gray-900 capitalize text-center" aria-labelledby="dropdownDefaultButton">
                            <li onClick={() => changeLanguage('en')} className='language_btn2 block space-y-2 hover:bg-white hover:text-primary text-black py-2 px-20 mb-2 rounded'>{t('NavbarPage.En')}</li>
                            <li onClick={() => changeLanguage('tr')} className='language_btn2 block space-y-2 hover:bg-white hover:text-primary text-black py-2 px-20 mb-2 rounded'>{t('NavbarPage.Tr')}</li>
                        </ul>
                    )}
                </div>

                {/* Navbar Links for Large Screen */}
                <nav className="menu hidden lg:flex text-center justify-center text-lg font-semibold capitalize gap-8 desktopUltraWide:text-7xl desktopLarge:text-5xl desktopMedium:text-3xl desktopSmall:text-2xl desktopLarge:gap-12 desktopLarge:pt-8 desktopMedium:pt-2" style={{ flexWrap: 'nowrap' }}>
                    {navLinks.map((item) => (
                        <Link
                            key={item.key}
                            to={item.path}
                            duration={500}
                            className="group relative inline-block cursor-pointer hover:text-brightColor"
                        >
                            {t(item.key)}
                            <span className="absolute inset-x-0 bottom-0 h-0.5 desktopLarge:-bottom-3 desktopLarge:h-2  desktopMedium:bottom-1  desktopMedium:h-2  bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </nav>
                {/* Language Dropdown for Large Screen */}
                <div ref={dropdownRef} className="relative lg:flex hidden sm:hidden">
                    <div className="flex items-center justify-center flex-col pt-1 desktopLarge:pt-5 desktopMedium:pt-5 space-x-1 desktopUltraWide:text-7xl desktopLarge:text-5xl desktopMedium:text-3xl desktopSmall:text-2xl " id="dropdown-container">
                        <button
                            onClick={() => { setMenuOpenDesk(prevState => !prevState); handleClickSvg(); }}
                            className="focus:outline-none flex items-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`svg1 w-8 h-8 desktopUltraWide:w-32 desktopUltraWide:h-32 desktopLarge:w-20 desktopLarge:h-20 desktopMedium:w-12 desktopMedium:h-12 desktopSmall:w-10 desktopSmall:h-10 text-white hover:dark:text-gray-900 ${isSvgClicked ? 'clicked' : ''}`}
                                onMouseEnter={handleSvg1MouseEnter}
                                onMouseLeave={handleSvg1MouseLeave}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className={`svg2 w-3 h-3 desktopUltraWide:w-14 desktopUltraWide:h-14 desktopLarge:w-8 desktopLarge:h-8 desktopSmall:w-5 desktopSmall:h-5 text-white hover:dark:text-gray-900 ${isSvgClicked ? 'rotate-180 ' : ''} ${isSvg1Hovered ? 'dark:text-gray-900' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            {/* Language menu Dropdown */}
                            <div className="lg:inline hidden sm:hidden items-center justify-center">
                                <div className={`languagedp fixed mt-6 top-8 right-48 w-68 lg:right-32 items-center justify-center bg-white flex flex-col rounded-lg transition-all duration-500 ease-in-out transform ${menuOpenDesk ? '' : 'hidden'}`}>
                                    <div className='mt-6 top-8 right-48 w-56 bg-white flex flex-col rounded-lg' id='divlan' style={{ padding: '10px', margin: '10px' }}>
                                        <h1 className='mb-4 text-black text-center font-modern capitalize'>{t('NavbarPage.Selectelanguage')}</h1>
                                        <button onClick={() => changeLanguage('en')} className='language_btn2 lg:inline space-y-2 hidden border border-black sm:hidden hover:text-primary hover:bg-gray-50 text-black font-bold py-2 px-4 mb-2 rounded'>{t('NavbarPage.En')}</button>
                                        <button onClick={() => changeLanguage('tr')} className='language_btn2 lg:inline space-y-2 hidden border border-black sm:hidden hover:text-primary hover:bg-gray-50 text-black font-bold py-2 px-4 mb-2 rounded'>{t('NavbarPage.Tr')}</button>
                                    </div>
                                </div>
                            </div>


                            <button onChange={toggleMenu} className='language_btn2 lg:inline hidden sm:hidden select-none text-white font-bold py-2 px-4 rounded'>{currentLanguage === 'en' ? 'English' : 'Türkçe'}</button>

                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Navbar;
