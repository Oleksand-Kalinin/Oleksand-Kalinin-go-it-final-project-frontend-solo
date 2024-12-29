import Container from "../Container/Container.tsx";
import Logo from "../Logo/Logo.tsx";
import Section from "../Section/Section.tsx";
import SignInForm from "../SignInForm/SignInForm.tsx";
import css from "./SignInSection.module.css";

const SignInSection = () => {
  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <Logo className={css.logo} />
        <SignInForm />
      </Container>
    </Section>
  );
};

export default SignInSection;
