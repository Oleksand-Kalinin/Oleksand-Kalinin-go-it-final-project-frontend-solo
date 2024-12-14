import Section from "../../components/Section/Section.tsx";
import Container from "../../components/Container/Container.tsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.tsx";
import css from "./HomePage.module.css";
import clsx from "clsx";

const HomePage = () => {
  return (
    <Section className={clsx(css.section, css.homePageSection)}>
      <Container className={css.container}>
        <WelcomeSection />
      </Container>
    </Section>
  );
};

export default HomePage;
