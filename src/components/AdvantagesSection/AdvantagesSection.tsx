import clsx from "clsx";
import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";

import firstUserPhoto_mobile_1x from "../../images/advantages-section/first-photo-our-users-mobile.png";
import firstUserPhoto_mobile_2x from "../../images/advantages-section/first-photo-our-users-mobile@2x.png";
import firstUserPhoto_tablet_desktop_1x from "../../images/advantages-section/first-photo-our-users-tablet&desktop.png";
import firstUserPhoto_tablet_desktop_2x from "../../images/advantages-section/first-photo-our-users-tablet&desktop@2x.png";

import secondUserPhoto_mobile_1x from "../../images/advantages-section/second-photo-our-users-mobile.png";
import secondUserPhoto_mobile_2x from "../../images/advantages-section/second-photo-our-users-mobile@2x.png";
import secondUserPhoto_tablet_desktop_1x from "../../images/advantages-section/second-photo-our-users-tablet&desktop.png";
import secondUserPhoto_tablet_desktop_2x from "../../images/advantages-section/second-photo-our-users-tablet&desktop@2x.png";

import thirdUserPhoto_mobile_1x from "../../images/advantages-section/third-photo-our-users-mobile.png";
import thirdUserPhoto_mobile_2x from "../../images/advantages-section/third-photo-our-users-mobile@2x.png";
import thirdUserPhoto_tablet_desktop_1x from "../../images/advantages-section/third-photo-our-users-tablet&desktop.png";
import thirdUserPhoto_tablet_desktop_2x from "../../images/advantages-section/third-photo-our-users-tablet&desktop@2x.png";

import css from "./AdvantagesSection.module.css";

const AdvantagesSection = () => {
  return (
    <Section className={clsx(css.section, css.advantagesSection)}>
      <Container className={css.container}>
        <div className={css.wrapperOurUsers}>
          <div className={css.wrapperUserPhoto}>
            <picture className={css.firstUserPhoto}>
              <source
                media="(min-width: 768px)"
                srcSet={`${firstUserPhoto_tablet_desktop_1x} 1x, ${firstUserPhoto_tablet_desktop_2x} 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${firstUserPhoto_mobile_1x} 1x, ${firstUserPhoto_mobile_2x} 2x`}
              />
              <img src={firstUserPhoto_mobile_1x} alt="User photo" />
            </picture>

            <picture className={css.secondUserPhoto}>
              <source
                media="(min-width: 768px)"
                srcSet={`${secondUserPhoto_tablet_desktop_1x} 1x, ${secondUserPhoto_tablet_desktop_2x} 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${secondUserPhoto_mobile_1x} 1x, ${secondUserPhoto_mobile_2x} 2x`}
              />
              <img src={secondUserPhoto_mobile_1x} alt="User photo" />
            </picture>

            <picture className={css.thirdUserPhoto}>
              <source
                media="(min-width: 768px)"
                srcSet={`${thirdUserPhoto_tablet_desktop_1x} 1x, ${thirdUserPhoto_tablet_desktop_2x} 2x`}
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${thirdUserPhoto_mobile_1x} 1x, ${thirdUserPhoto_mobile_2x} 2x`}
              />
              <img src={thirdUserPhoto_mobile_1x} alt="User photo" />
            </picture>
          </div>
          <p className={css.textOurUsers}>
            Our <span className={css.acceptColor}>happy</span> customers
          </p>
        </div>
        <ul className={css.wrapperOurAdvantages}>
          <li className={css.itemOurAdvantages}>
            <p>Habit drive</p>
          </li>
          <li className={css.itemOurAdvantages}>
            <p>View statistics</p>
          </li>
          <li className={css.itemOurAdvantages}>
            <p>Personal rate setting</p>
          </li>
        </ul>
      </Container>
    </Section>
  );
};

export default AdvantagesSection;
