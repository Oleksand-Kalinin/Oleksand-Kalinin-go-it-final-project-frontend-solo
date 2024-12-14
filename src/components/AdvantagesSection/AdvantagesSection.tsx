import clsx from "clsx";
import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";
import css from "./AdvantagesSection.module.css";

const AdvantagesSection = () => {
  return (
    <Section className={clsx(css.section, css.advantagesSection)}>
      <Container className={css.container}>
        <div className={css.wrapperOurUsers}>
          <div className={css.wrapperUserPhoto}></div>
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
