import Section from "../../components/Section/Section.tsx";
import Container from "../../components/Container/Container.tsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.tsx";

const HomePage = () => {
  return (
    <Section paddingBottom="8px">
      <Container bgColor="#f0eff4" padding="24px 16px 67px">
        <WelcomeSection />
      </Container>
    </Section>
  );
};

export default HomePage;
