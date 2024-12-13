import Section from "../../components/Section/Section.tsx";
import Container from "../../components/Container/Container.tsx";
import WelcomeSection from "../../components/WelcomeSection/WelcomeSection.tsx";
import useResponsive from "../../hooks/useResponsive.ts";

const HomePage = () => {
  const { isTablet, isDesktop } = useResponsive();

  let padding: string;
  if (isDesktop) {
    padding = "32px 32px 188px";
  } else if (isTablet) {
    padding = "32px 32px 50px";
  } else {
    padding = "24px 16px 67px";
  }

  return (
    <Section paddingBottom="8px">
      <Container bgColor="#f0eff4" padding={padding}>
        <WelcomeSection />
      </Container>
    </Section>
  );
};

export default HomePage;
