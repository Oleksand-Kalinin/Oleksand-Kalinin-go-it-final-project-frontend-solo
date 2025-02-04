import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";
import css from "./WelcomeSection.module.css";
import clsx from "clsx";
import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";

const WelcomeSection = () => {
  return (
    <Section className={clsx(css.section, css.welcomeSection)}>
      <Container className={clsx(css.container, css.welcomeContainer)}>
        <Logo className={css.logo} />
        <div className={css.wrapper}>
          <p className={css.textHomePage}>
            Record daily water intake and track
          </p>
          <h1 className={css.titleHomePage}>Water consumption tracker</h1>
          <nav className={css.nav}>
            <Link to="/signup" className={css.itemNav}>
              Try tracker
            </Link>
            <Link to="/signin" className={css.itemNav}>
              Sign In
            </Link>
          </nav>
        </div>
      </Container>
    </Section>
  );
};

export default WelcomeSection;
