// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import icon1 from '../assets/needsicon1.svg'
import icon2 from '../assets/needsicon2.svg'
import icon3 from '../assets/needsicon3.svg'
import icon4 from '../assets/needsicon4.svg'





function RequirementExpertise() {

    const { t, i18n } = useTranslation();
    const [currentLanguage] = useState(() => localStorage.getItem('selectedLanguage') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <>

            <div className="my-24 md:px-14 px-4 max-w-[1400px] mx-auto">
                <div className='flex space-y-2 flex-col text-center mb-14 select-none '>
                    <h1 className="desktopMedium:text-5xl md:text-4xl sm:text-4xl xs:text-3xl xxs:text-3xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
                        {t('RequirementExpertisePage.heading')}
                    </h1>
                    <span className='text-2xl sm:text-2xl xxs:text-lg'>
                        {t('RequirementExpertisePage.subheading')}
                    </span>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
                    <div className='w-full  lg:w-3/4'>
                        <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8  '>
                            <div className='bg-[##ffffff66] rounded-lg h-96 ss:h-96 xxs:h-[430px] shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 hover:bg-slate-50 select-none'>
                                <div className="p-10 flex flex-col items-center text-center group   rounded-3xl cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                                    <img src={icon1} className="p-4 rounded-xl w-[78px] border-2 border-black bg-[#6391FF] text-white shadow-lg shadow-red-200"></img>
                                    <h5 className='text-2xl sm:text-2xl xxs:text-xl font-semibold text-black px-5 text-center mt-5'> {t('RequirementExpertisePage.headingtxt1')}</h5>
                                    <p className='xxs:text-md'>
                                        {t('RequirementExpertisePage.subheadingtxt1')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[##ffffff66] rounded-lg h-96 xss:h-100 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 hover:bg-slate-50 select-none  '>
                                <div className="p-10 flex flex-col items-center text-center group   rounded-3xl cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                                    <img src={icon2} className="p-4 rounded-xl  border-2 border-black bg-[#6391FF] text-white shadow-lg shadow-red-200"></img>
                                    <h5 className='text-2xl sm:text-2xl xxs:text-xl font-semibold text-black px-5 text-center mt-5'>{t('RequirementExpertisePage.headingtxt2')}</h5>
                                    <p className='xxs:text-md'>
                                        {t('RequirementExpertisePage.subheadingtxt2')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[##ffffff66] rounded-lg h-96 xss:h-100 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 hover:bg-slate-50 select-none '>
                                <div className="p-10 flex flex-col items-center text-center group   rounded-3xl cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                                    <img src={icon3} className="p-4 rounded-xl  border-2 border-black bg-[#6391FF] text-white shadow-lg shadow-red-200"></img>
                                    <h5 className='text-2xl sm:text-2xl xxs:text-xl font-semibold text-black px-5 text-center mt-5'>{t('RequirementExpertisePage.headingtxt3')}</h5>
                                    <p className='xxs:text-md'>
                                        {t('RequirementExpertisePage.subheadingtxt3')}
                                    </p>
                                </div>
                            </div>
                            <div className='bg-[##ffffff66] rounded-lg h-96 xss:h-100 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-500 hover:bg-slate-50 select-none '>
                                <div className="p-10 flex flex-col items-center text-center group   rounded-3xl cursor-pointer shadow-md hover:translate-y-1 transition-all duration-500 ">
                                    <img src={icon4} className="p-4 rounded-xl  border-2 border-black bg-[#6391FF] text-white shadow-lg shadow-red-200"></img>
                                    <h5 className='text-2xl sm:text-2xl xxs:text-xl font-semibold text-black px-5 text-center mt-5'>{t('RequirementExpertisePage.headingtxt4')}</h5>
                                    <p className='xxs:text-md'>
                                        {t('RequirementExpertisePage.subheadingtxt4')}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default RequirementExpertise;







