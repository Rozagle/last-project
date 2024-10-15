// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

import { akbank, BurganBank, DenizBank, ziraatkatilim, ziraatteknoloji, hsbc, intertech, kalkilmayatirimbankasi, odeabank, evrensel } from '../assets/bank-logos/Banks';
function Client() {
    const { t, i18n } = useTranslation();
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>
            <section id='client' className="px-3 md:lg:xl:px-40 py-20 bg-opacity-10 max-w-[1132px] lg:max-w-[2332px] lg:h-[835px] md:h-[690px] mx-auto" style={{ zIndex: -1 }}>

                <div className='w-[100%] flex flex-col lg:pt-24'>
                    <div className='flex space-y-2 flex-col text-center mb-14 text-black'>
                        <h1 className="desktopMedium:text-5xl lg:text-[40px] md:text-4xl xsm:text-4xl sm:text-4xl xxs:text-3xl  xs:text-4xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
                            {t('ClientPage.heading')}
                        </h1>
                        <span className='lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl xxs:text-xl  '>
                            {t('ClientPage.subheading')}
                        </span>
                    </div>
                    <Marquee direction="right" autoFill pauseOnMouseOver >
                        <div className='m-1 flex space-x-6 xxs:space-x-0 p-7 xxs:p-1  '>
                            <img src={odeabank} alt="Odea Bank" className="inline-block h-8 mr-8 ml-8 md:mr-2 md:ml-2 " />
                        </div>
                        <div className=' m-1 flex space-x-6 xxs:space-x-0 p-7 xxs:p-1 '>
                            <img src={BurganBank} alt="Burgan Bank" className="inline-block h-16 mr-8 ml-8 md:mr-4 md:ml-2 " />
                        </div>
                        <div className=' m-1 flex space-x-6 xxs:space-x-0 p-7 xxs:p-1  '>
                            <img src={akbank} alt="Akbank" className="inline-block h-12 mr-8 ml-8 md:mr-2 md:ml-2  " />
                        </div>
                        <div className=' m-1 flex space-x-6 xxs:space-x-0 p-7 xxs:p-1  '>
                            <img src={DenizBank} alt="DenizBank" className="inline-block h-16 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className=' m-1 flex space-x-6 xxs:space-x-0 p-7 xxs:p-1 '>
                            <img src={ziraatkatilim} alt="Ziraat Katilim Bankasi" className="inline-block h-11 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>

                    </Marquee>
                    <Marquee direction="left" autoFill pauseOnMouseOver className='mt-2 md:mt-10 xsm:mt-10 '>
                        <div className=' m-1 flex space-x-6 xxs:space-x-0 p-16 ml-8 xxs:p-1'>
                            <img src={ziraatteknoloji} alt="Ziraat Teknoloji" className="inline-block h-11 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className=' m-1 flex space-x-6 xxs:space-x-0 p-16 ml-8 xxs:p-1 '>
                            <img src={hsbc} alt="HSBC" className="inline-block h-11 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className='m-1 flex space-x-6 xxs:space-x-0 p-16 ml-8 xxs:p-1 '>
                            <img src={intertech} alt="Intertech" className="inline-block h-12 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className='m-1 flex space-x-6 xxs:space-x-0 p-16 ml-8 xxs:p-1 '>
                            <img src={kalkilmayatirimbankasi} alt="Kalkilma Yatirim Bankasi" className="inline-block  h-18 mr-8 ml-8 md:mr-5 md:ml-5 " />
                        </div>
                        <div className='m-1 flex space-x-6 xxs:space-x-0 p-16 ml-8 xxs:p-1 '>
                            <img src={evrensel} alt="Evrensel" className="inline-block h-12 mr-8 ml-8 md:mr-2 md:ml-5 " />
                        </div>
                    </Marquee>
                </div>
            </section>

        </>
    );
}

export default Client;
