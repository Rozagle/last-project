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
    <section id='hero' className="mx-auto desktopSmall:w-1/2 desktopUltraWide:w-1/4 desktopLarge:w-2/4 lg:w-4/6 md:w-11/12 sm:w-11/12 ss:w-11/12 xs:w-11/12 xxs:w-full bg-white p-1 desktopSmall:pt-32 lg:pt-16 " style={{
      zIndex: -1, userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none'
    }}>
      <div className=" select-none grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 xs:grid-cols-1 xxs:grid-cols-1 gap-4">
        <div className="lg:col-span-8  sm:col-span-8  xs:col-span-8 xxs:col-span-8 ">
          <img src={`${changingImages.imageUrl1}`} alt="" className="lg:w-full md:w-[550px] ss:w-full h-auto md:ml-5" />
        </div>
        <div className="col-span-4  sm:col-span-4">
          <img src={`${changingImages.imageUrl2}`} alt="" className="lg:w-full md:w-[260px] ss:w-[500px] xxs:w-[325px]  h-auto lg:mt-12 sm:mt-11 md:mr-6 lg:pt-0 md:pt-3 sm:pt-0 xsm:pt-0 ss:pt-0 xs:pt-0 xxs:pt-0 sm:ml-3 ss:ml-16 xs:ml-16 xxs:ml-[2.13rem]" />
        </div>
        <div className="col-span-6  sm:col-span-4">
          <img src={`${changingImages.imageUrl4}`} alt="" className="lg:w-full ss:w-full h-auto lg:mt-0 lg:ml-2 sm:mt-2 sm:ml-3 ss:ml-4 xs:ml-6 xxs:ml-[1rem]" />
        </div>
        <div className="col-span-6  sm:col-span-8">
          <img src={`${changingImages.imageUrl3}`} alt="" className="lg:w-full md:w-[550px] h-auto lg:mt-0 sm:mt-2 ss:ml-4 xs:ml-2 xxs:ml-[18px]" />
        </div>
      </div>
    </section>
  );
}

export default ChangingNeed;
