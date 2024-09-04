// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  team1, team2, team3, team4, team5, team6,
  team7, team8, team9, team10, team11, team12, team13, team14
} from '../assets/Teams-photo/Teams.js';
import './Teams.css';

function Teams() {
  const { t, i18n } = useTranslation();
  const currentLanguage = localStorage.getItem('selectedLanguage') || 'tr';
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const wrapper = document.querySelector(".wrapper");
    const firstCardWidth = carousel.querySelector(".card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".arrow-icon");

    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    const carouselChildren = [...carousel.children];

    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
      carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildren.slice(0, cardPerView).forEach(card => {
      carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    const handleArrowClick = (direction) => {
      carousel.scrollLeft += direction === "left" ? -firstCardWidth : firstCardWidth;
    };

    const handleDragStart = (e) => {
      e.preventDefault();
      carousel.classList.add("dragging");
      const startX = e.pageX;
      const startScrollLeft = carousel.scrollLeft;

      const handleDragging = (e) => {
        if (!carousel.classList.contains("dragging")) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
      };

      const handleDragStop = () => {
        carousel.classList.remove("dragging");
        document.removeEventListener("mousemove", handleDragging);
        document.removeEventListener("mouseup", handleDragStop);
      };

      document.addEventListener("mousemove", handleDragging);
      document.addEventListener("mouseup", handleDragStop);
    };

    const handleInfiniteScroll = () => {
      if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
      }
    };

    let timeoutId;
    const autoPlay = () => {
      if (window.innerWidth < 800) return;
      timeoutId = setTimeout(() => {
        carousel.scrollLeft += firstCardWidth;
        autoPlay();
      }, 1500);
    };

    autoPlay();

    arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => handleArrowClick(btn.id));
    });

    carousel.addEventListener("mousedown", handleDragStart);
    carousel.addEventListener("scroll", handleInfiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    return () => {
      arrowBtns.forEach(btn => {
        btn.removeEventListener("click", () => handleArrowClick(btn.id));
      });
      carousel.removeEventListener("mousedown", handleDragStart);
      carousel.removeEventListener("scroll", handleInfiniteScroll);
      wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapper.removeEventListener("mouseleave", autoPlay);
      clearTimeout(timeoutId);
    };

  }, [language]);

  const TeamsInfo = [
    { 'Name': 'Naci Özkan', 'title': 'title1', 'titlesub': 'title1sub', 'img': team1 },
    { 'Name': 'Yeşim Sonbudak', 'title': 'title2', 'titlesub': 'title2sub', 'img': team2 },
    { 'Name': 'Cuneyt Gülener', 'title': 'title3', 'titlesub': 'title3sub', 'img': team3 },
    { 'Name': 'Emin Uçar', 'title': 'title4', 'titlesub': 'title4sub', 'img': team4 },
    { 'Name': 'H. Meral Akman', 'title': 'title5', 'titlesub': 'title5sub', 'img': team5 },
    { 'Name': 'Gürkan Güleç', 'title': 'title6', 'titlesub': 'title6sub', 'img': team6 },
    { 'Name': 'Çiğdem Büyükergen', 'title': 'title7', 'titlesub': 'title7sub', 'img': team7 },
    { 'Name': 'Zafer Şekerci', 'title': 'title8', 'titlesub': 'title8sub', 'img': team8 },
    { 'Name': 'Serkan Kunduracı', 'title': 'title9', 'titlesub': 'title9sub', 'img': team9 },
    { 'Name': 'Dilek Şekerci', 'title': 'title10', 'titlesub': 'title10sub', 'img': team10 },
    { 'Name': 'Roza Allafi', 'title': 'title11', 'titlesub': 'title11sub', 'img': team11 },
    { 'Name': 'Arınç aydın', 'title': 'title12', 'titlesub': 'title12sub', 'img': team12 },
    { 'Name': 'Çağan Oduncuoğlu', 'title': 'title13', 'titlesub': 'title13sub', 'img': team13 },
    { 'Name': 'Mustafa Yılmaz', 'title': 'title14', 'titlesub': 'title14sub', 'img': team14 }
  ];

  return (
    <>
      <section id="teams" className='flex space-y-1 flex-col text-center mb-14 xxs:mb-4'>
        <div className='flex space-y-2 flex-col text-center xxs:p-2 select-none'>
          <h1 className="text-2xl md:text-4xl sm:text-3xl xsm:text-4xl xxs:text-4xl font-bold text-center mt-8 mb-4 xxs:mb-0 capitalize">
            {t('TeamPage.heading')}
          </h1>
          <span className='text-2xl md:text-3xl xsm:text-3xl xxs:text-xsm'>
            {t('TeamPage.subheading1')}
          </span>
          <span className='text-2xl md:text-3xl xsm:text-3xl xxs:text-xsm'>
            {t('TeamPage.subheading2')}
          </span>
        </div>
      </section>

      <div className="slider-container min-h-[220px]">
        <div className="wrapper">
          <FiArrowLeft id="left" className="arrow-icon" />
          <ul className="carousel" key={language}>
            {TeamsInfo.map((team, index) => (
              <li className="card" key={index}>
                <div className="img">
                  <img src={team.img} alt="img" draggable="false" />
                </div>
                <h2>{team.Name}</h2>
                <span>{t(`TeamPage.${team.title}`)}</span>
                <span className='subtitle'>
                  {t(`TeamPage.${team.titlesub}`)}
                </span>
              </li>
            ))}
          </ul>
          <FiArrowRight id="right" className="arrow-icon" />
        </div>
      </div>
    </>
  );
}

export default Teams;
