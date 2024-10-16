// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import enjson from '../Translations/En/en.json';
import trjson from '../Translations/TR/tr.json';

function ChangingNeed() {
  const { i18n } = useTranslation();
  const [changingImages, setChangingImages] = useState(trjson.changing);

  useEffect(() => {
    const updateImages = (language) => {
      setChangingImages(language === 'tr' ? trjson.changing : enjson.changing);
    };

    const currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';
    i18n.changeLanguage(currentLanguage);
    updateImages(currentLanguage);

    const handleLanguageChange = (lng) => {
      updateImages(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <section id='hero' className="mx-auto  desktopUltraWide:w-1/4 desktopLarge:w-2/4 desktopSmall:w-1/2 xl:w-[1000px] lg:w-[1000px] md:w-11/12 xsm:w-11/12 sm:w-11/12 ss:w-[480px] xs:w-[430px] xxs:w-full bg-white p-1 desktopSmall:pt-32 lg:pt-16 " style={{
      zIndex: -1, userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <div className=" select-none grid desktopMedium:col-span-12 desktopSmall:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-12 xsm:grid-cols-12 sm:grid-cols-12 xs:grid-cols-1 xxs:grid-cols-1 gap-4 md:gap-1 xsm:gap-2 sm:gap-2 xs:gap-2 xxs:gap-2">
        <div className="desktopMedium:col-span-8 desktopSmall:col-span-8 xl:col-span-8 lg:col-span-8 md:col-span-8 xsm:col-span-8 sm:col-span-8 xs:col-span-8 xxs:col-span-8 ">
          <img src={`${changingImages.imageUrl1}`} alt="" className="" />
        </div>
        <div className="desktopMedium:col-span-4 desktopSmall:col-span-4 xl:col-span-4 md:col-span-4 xsm:col-span-4 xsm:mt-8 sm:col-span-4 sm:mt-8 xs:col-span-8 xxs:col-span-8 xs:flex xs:justify-center xs:items-center xxs:flex xxs:justify-center xxs:items-center  ">
          <img src={`${changingImages.imageUrl2}`} alt="" className="ss:w-[400px] xs:w-full xs:h-auto" />
        </div>
        <div className="desktopMedium:col-span-4 desktopSmall:col-span-4 xl:col-span-4 md:col-span-4 xsm:col-span-4 sm:col-span-4 xs:col-span-8 xxs:col-span-8 ">
          <img src={`${changingImages.imageUrl4}`} alt="" className=" xs:w-full xs:h-auto " />
        </div>
        <div className="desktopMedium:col-span-8 desktopSmall:col-span-8 xl:col-span-8 md:col-span-8 xsm:col-span-8 sm:col-span-8 xs:col-span-8 xxs:col-span-8">
          <img src={`${changingImages.imageUrl3}`} alt="" className="lg:w-full" />
        </div>
      </div>
    </section>
  );
}

export default ChangingNeed;
