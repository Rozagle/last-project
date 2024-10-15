/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>
            <footer id='contactus' className="bg-black text-white ">
                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-2 gap-8  ">
                        <div className="select-none ">
                            <img
                                className="select-none w-72 h-72 desktopSmall:w-[430px] desktopSmall:h-[300px] desktopSmall:ml-52 lg:w-96 lg:h-96 lg:ml-10 lg:pb-16 md:w-72 md:h-72 ss:ml-0 xs:flex xs:justify-center xs:items-center xxs:w-72 xxs:h-72 xxs:flex xxs:justify-center xxs:items-center"
                                alt=""
                                src="/siyesoNavbar.svg"
                            />
                        </div>
                        <div className="mb-6 xxs:mb-2">
                            <h3 className="text-lg lg:text-2xl xsm:text-3xl xxs:text-2xl font-bold mb-4 xxs:mb-8">{t('FooterPage.heading1')}</h3>
                            <div className="mt-6 xsm:space-y-5 " >
                                <p className='lg:text-2xl xsm:text-2xl xxs:text-xl mb-2.5' >
                                    <a href="https://goo.gl/maps/LqEgX3RxspXzomoS7" className="text-white hover:text-gray-400 ">
                                        {t('FooterPage.address')}
                                    </a>
                                </p>
                                <p className='lg:text-2xl xsm:text-2xl xxs:text-xl mb-2.5'>
                                    <a href="tel:+905325959709" className="text-white hover:text-gray-400 lg:text-nowrap">
                                        {t('FooterPage.phone')}
                                    </a>
                                </p>
                                <p className='lg:text-2xl xsm:text-2xl xxs:text-xl mb-2.5'>
                                    <a href="mailto:info@siyeso.com" className="text-white hover:text-gray-400 lg:text-nowrap">
                                        {t('FooterPage.mail')}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm lg:text-lg">&copy; 2024 All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
