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

    <>
      <section id="about" className="px-3 xl:px-2 md:lg:xl:px-40 py-20 bg-opacity-10 max-w-[1400px] mx-auto desktopSmall:pt-32 lg:h-[790px] " style={{ zIndex: -1 }}>
        {/* max-w-[1132px] */}
        <div className='flex space-y-2 flex-col text-center mb-14  xxs:mb-6 select-none '>

          <h1 className=" text-2xl desktopMedium:text-6xl lg:text-[40px] md:text-4xl sm:text-4xl xs:text-4xl xs:ml-6 xxs:text-3xl font-bold text-center mt-8 mb-4  xxs:mb-0  xxs:mt-0 capitalize">
            {t('AboutPage.heading')}
          </h1>
        </div>
        <div className='lg:w-8/10 md:w-full xs:w-full xxs:w-full mx-auto flex flex-col lg:flex-row md:flex-col lg:mt-8 xl:mt-12 justify-between items-center  '>
          <img src={aboutusimg} alt="" className='select-none w-full xl:w-2/5 lg:w-4/5  md:w-3/5 sm:w-3/5 ss:w-3/4 xs:w-full xxs:w-full ss:ml-4  lg:ml-4 lg:mb-24 xs:mr-2   md:mb-0 relative mx-auto rounded-2xl' style={{ maxWidth: '90%', height: 'auto', maxHeight: '400px' }} />
          <div className=' lg:w-full md:w-full xxs:w-1\4 m-3  lg:mt-6 xl:mb-24'>
            <p className='text-base text-center lg:text-xl  sm:text-2xl xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description1')}
            </p>
            <p className='text-base text-center lg:text-xl sm:text-2xl xsm:text-2xl  xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description2')}
            </p>
            <p className='text-base text-center lg:text-xl sm:text-2xl  xsm:text-2xl xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description3')}
            </p>
            <p className='text-base text-center lg:text-xl sm:text-2xl xsm:text-2xl xxs:text-lg xxs:text-center mb-4'>
              {t('AboutPage.description4')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;