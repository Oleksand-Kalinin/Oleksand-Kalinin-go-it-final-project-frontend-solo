import Section from "../Section/Section.tsx";
import Container from "../Container/Container.tsx";
import Logo from "../Logo/Logo.tsx";
import SignUpForm from "../SignUpForm/SignUpForm.tsx";

import css from "./SignUpSection.module.css";

const SignUpSection = () => {
    return (
        <Section className={css.section}>
            <Container className={css.container}>
                <Logo className={css.logo} />
                <SignUpForm />
            </Container>
        </Section>
    );
};

export default SignUpSection;