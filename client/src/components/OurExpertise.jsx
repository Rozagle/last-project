// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Aboutusreg from '../assets/Aboutusreg.svg';
import Aboutusblob from '../assets/Aboutusblob.svg';
import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'



function OurExpertise() {
    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>
            <section id="ourexpertise" className="px-3 xxs:px-0 lg:px-4 xl:px-0 sm:px-6 xsm:px-6 desktopSmall:px-0 desktopMedium:px-2 desktopLarge:px-0 desktopUltraWide:px-0 md:lg:xl:px-40 py-20 bg-opacity-10 lg:w-[1032px] xl:w-[1132px] desktopSmall:w-[1132px] desktopMedium:w-[1532px] desktopLarge:w-[1532px] desktopUltraWide:w-[1832px] mx-auto" style={{ zIndex: -1 }}>
                <img src={Aboutusreg} alt="" className='absolute mb-24 xl:left-[1380px] desktopSmall:left-[1550px] desktopMedium:left-[2100px] desktopLarge:left-[2400px] desktopUltraWide:left-[3300px] xxl:left-[200px] lg:left-[1000px] lg:max-w-[80%] lg:mb-48 md:left-[750px] md:max-w-[87%] sm:left-[600px] ss:left-[500px] ss:max-w-[70%] xs:left-[900px] xs:max-w-[30%] xxs:left-[300px] select-none ' style={{ zIndex: -1 }} />
                <img src={Aboutusblob} alt="" className='absolute xl:left-[80px] desktopSmall:left-[100px] desktopMedium:left-[40px] desktopLarge:right-[600px] desktopUltraWide:left-[500px] lg:right-[1000px] md:right-[800px] md:max-w-[80%] md:mt-42 sm:right-[620px]  sm:max-w-[60%] ss:right-[600px] ss:max-w-[50%] xs:right-[400px] xs:max-w-[80%] xxs:right-[350px] xxs:w-[25%] xxs:mt-42  select-none' style={{ zIndex: -1 }} />
                <div className='flex space-y-2 flex-col text-center mb-14 select-none '>
                    <h1 className="text-2xl desktopUltraWide:text-8xl desktopSmall:text-5xl desktopMedium:text-6xl desktopLarge:text-7xl md:text-4xl sm:text-4xl xxs:text-3xl ss:text-4xl xs:text-4xl font-bold text-center mt-8 mb-4 capitalize">
                        {t('OurExpertisePage.heading')}
                    </h1>
                    {/* <span className='text-2xl xs:text-2xl xxs:text-xl'>
                        {t('OurExpertisePage.subheading')}
                    </span> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 group bg-none rounded-3xl p-4" style={{ zIndex: -1 }}>
                    <div className="p-10 xxs:p-3 desktopMedium:p-16 desktopLarge:p-16 desktopUltraWide:p-16 flex flex-col items-center text-center group border-2 border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 select-none " >
                        <img src={icon1} alt="" className="p-4 desktopMedium:p-6 desktopMedium:w-28 desktopLarge:p-8 desktopLarge:w-32 desktopUltraWide:p-12 desktopUltraWide:w-44 rounded-xl  border-2 border-black bg-[#ff7d37] text-white shadow-lg shadow-red-200"></img>
                        <p className="text-2xl desktopMedium:text-4xl desktopLarge:text-4xl desktopUltraWide:text-5xl md:text-3xl xxs:text-2xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.firstgridheading')}</p>
                        <p className="mt-2 desktopMedium:text-2xl desktopLarge:text-2xl desktopUltraWide:text-4xl text-md md:text-xl xxs:text-xl xs:text-2xl text-slate-500">{t('OurExpertisePage.firstgridsubheading1')}</p>
                        <p className="text-md desktopMedium:text-2xl desktopLarge:text-2xl desktopUltraWide:text-4xl md:text-xl xxs:text-xl xs:text-2xl text-slate-500">{t('OurExpertisePage.firstgridsubheading2')}</p>
                    </div>

                    <div className="p-10 xxs:p-3 desktopUltraWide:p-16 flex flex-col items-center text-center group border-2  border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 select-none ">
                        <img src={icon2} alt="" className="p-4 desktopMedium:p-6 desktopMedium:w-28 desktopLarge:p-8 desktopLarge:w-32  desktopUltraWide:p-12 desktopUltraWide:w-44 rounded-xl border-2 border-black bg-[#F33E33] text-white shadow-lg shadow-orange-200"></img>
                        <p className="text-2xl desktopMedium:text-4xl desktopLarge:text-4xl desktopUltraWide:text-5xl md:text-3xl xxs:text-2xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.secondgridheading')}</p>
                        <p className="mt-0 text-md desktopMedium:text-2xl desktopLarge:text-2xl desktopUltraWide:text-4xl md:text-xl xxs:text-lg xs:text-2xl text-slate-500">{t('OurExpertisePage.secondgridsubheading1')}</p>
                        <p className="mt-0 text-md desktopMedium:text-2xl desktopLarge:text-2xl desktopUltraWide:text-4xl md:text-xl xxs:text-lg xs:text-2xl text-slate-500">{t('OurExpertisePage.secondgridsubheading2')}</p>

                    </div>

                    <div className="p-10 xxs:p-3 desktopUltraWide:p-16 flex flex-col items-center text-center group border-2  border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 select-none">
                        <img src={icon3} alt="" className="p-4 desktopMedium:p-6 desktopMedium:w-28 desktopLarge:p-8 desktopLarge:w-32 desktopUltraWide:p-12 desktopUltraWide:w-44 rounded-xl  border-2 border-black bg-[#04ff00dd] text-white shadow-lg shadow-yellow-200"></img>
                        <p className="text-2xl desktopMedium:text-4xl desktopLarge:text-4xl desktopUltraWide:text-5xl md:text-3xl xxs:text-2xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.thirdgridhaeding')}</p>
                        <p className="mt-2 text-md desktopMedium:text-2xl desktopLarge:text-2xl desktopUltraWide:text-4xl md:text-xl xxs:text-lg xs:text-2xl text-slate-500">{t('OurExpertisePage.thirdgridsubhaeding')}</p>
                    </div>

                    <div className="p-10 xxs:p-3 desktopUltraWide:p-16 flex flex-col items-center text-center group border-2  border-gray-700 bg-white rounded-3xl hover:bg-slate-50 cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 select-none">
                        <img src={icon4} alt="" className="p-4 desktopMedium:p-6 desktopMedium:w-28 desktopLarge:p-8 desktopLarge:w-32 desktopUltraWide:p-12 desktopUltraWide:w-44 rounded-xl  border-2 border-black  bg-[#0091ff] text-white shadow-lg shadow-lime-200"></img>
                        <p className="text-2xl desktopMedium:text-4xl desktopLarge:text-4xl desktopUltraWide:text-5xl xxs:text-2xl md:text-3xl xs:text-3xl font-medium text-slate-700 m-3">{t('OurExpertisePage.forthgridheading')}</p>
                        <p className="mt-2 text-md desktopMedium:text-2xl desktopLarge:text-2xl desktopUltraWide:text-4xl xxs:text-lg md:text-xl xs:text-2xl text-slate-500">{t('OurExpertisePage.forthgridsubheading')}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurExpertise;
