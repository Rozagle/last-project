// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import herologo from '/logo-hero.png';
import herobg from '/herobg.svg';

function Hero() {
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <>
      <div className='max-w-[6350px] max-h-[5800px] desktopUltraWide:max-h-[4350px] desktopLarge:max-h-[4350px] desktopMedium:max-h-[1150px] desktopSmall:max-h-[800px] xl:max-h-[700px] lg:max-h-[633px] xxs:min-h-[500px] flex flex-col md:flex-row sm:flex-row ss:flex-row xs:flex-row xxs:flex-row items-center justify-center bg-cover bg-center text-white relative z-1' style={{
        backgroundImage: `url(${herobg})`, zIndex: -1
      }}>

        {/* left-side Hero  desktopLarge:bg-red-500*/}
        <div className=" left-side flex flex-col justify-center px-16 xxs:px-10 text-center lg:w-4/5 md:w-1/2 sm:w-2/3 ss:w-4/5 xs:w-4/5 xxs:w-full lg:pb-32 md:pb-72 sm:pb-64 ss:pb-72 xs:pb-42 xs:pl-8 sm:me-2 xxs:p-8 xxs:pt-12 sm:pl-6 ss:pl-4 xxs:pb-36 sm:mr-8 md:text-left sm:text-left sm:text-lg ss:text-left xs:text-left xxs:text-left xxs:text-xs  " style={{
          zIndex: -1, userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}>
          <p className="text-black font-bold text-3xl pb-2 desktopLarge:text-6xl desktopSmall:text-4xl md:text-2xl sm:text-2xl ss:text-xl xs:text-sm xxs:text-sm xxs:mr-3 xxs:pb-0 text-opacity-50 uppercase" style={{ fontFamily: "Arimo, sans-serif", fontWeight: 400, zIndex: -1 }}>{t('left_side_hero.subheading')}</p>
          <h3 className='text-2xl desktopLarge:text-8xl desktopSmall:text-5xl md:text-3xl sm:text-3xl xs:text-2xl xxs:text-[12px] xxs:mb-0 font-bold mb-2'>
            {t('left_side_hero.heading')}
          </h3>
        </div>

        {/* Right-side Hero */}
        <div className=" right-side flex desktopUltraWide:pb-96 desktopUltraWide:mb-96 desktopLarge:pb-96 desktopLarge:mb-96 desktopLarge:ml-24  desktopUltraWide:w-2/5 desktopLarge:w-2/4 desktopMedium:mb-52 desktopSmall:mb-20 lg:mr-40 lg:pt-8  md:w-1/2 xxs:w-full" style={{
          zIndex: -1,
          WebkitUserSelect: 'none', 
        }}>
          <img src={herologo} alt="" className=" select-none h-auto lg:w-3/4 md:w-4/5 xxs:w-full desktopUltraWide:mb-48 lg:mt-3 lg:ml-12 md:ml-30 sm:mr-20 sm:pb-72 ss:pb-96 ss:pt-3 xs:pb-72 xs:pr-6 xxs:pb-48 xxs:mr-3 " />
        </div>
      </div>
    </>
  );
}

export default Hero;