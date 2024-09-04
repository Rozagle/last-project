// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import aboutusimg from '../assets/Aboutus.svg';



function About() {
  const { t, i18n } = useTranslation();
  const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <section id='about' className='p-2 min-h-[600px] pt-20 select-none'>
      <div className='px-4 lg:px-30 mx-auto my-8'>
        <div className='flex space-y-2 flex-col text-center mb-14 xs:mb-8 '>
          <h1 className=" text-2xl lg:text-4xl md:text-4xl sm:text-4xl xs:text-2xl xxs:text-4xl  font-bold text-center mt-8 mb-4 capitalize">
            {t('AboutPage.heading')}
          </h1>
        </div>
        <div className='md:w-8/10 xs:w-full xxs:w-full md:mr-4  mx-auto flex flex-col md:flex-row justify-between items-center '>
          <img src={aboutusimg} alt="" className='select-none w-full xl:w-2/5 lg:w-4/5  md:w-4/5 sm:w-3/5 ss:w-3/4 xs:w-full xxs:w-full ss:ml-4 md:ml-0 lg:ml-4 xs:mr-2  md:mb-0 relative mx-auto rounded-xl' style={{ maxWidth: '90%', height: 'auto', maxHeight: '400px' }} />
          <div className=' lg:w-3/4 md:w-full xxs:w-1\4 m-3'>
            <p className='text-base lg:text-lg lg:text-red  sm:text-2xl sm:text-center xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description1')}
            </p>
            <p className='text-base lg:text-lg sm:text-2xl xsm:text-2xl sm:text-center xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description2')}
            </p>
            <p className='text-base lg:text-lg sm:text-2xl sm:text-center xsm:text-2xl xxs:text-lg xxs:text-center  mb-4'>
              {t('AboutPage.description3')}
            </p>
            <p className='text-base lg:text-lg sm:text-2xl sm:text-center xsm:text-2xl xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;