import Section from "../../components/Section/Section.tsx";
import Container from "../../components/Container/Container.tsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.tsx";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <WelcomeSection />
      </Container>
    </Section>
  );
};

export default HomePage;
