import AddWaterBtn from "../AddWaterBtn/AddWaterBtn.tsx";
import Container from "../Container/Container.tsx";
import Logo from "../Logo/Logo.tsx";
import Section from "../Section/Section.tsx";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma.tsx";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar.tsx";
import css from "./WaterMainInfo.module.css";

const WaterMainInfo = () => {
  return (
    <Section>
      <Container className={css.container}>
        <Logo className={css.logo} />
        <WaterDailyNorma className={css.dailyNorma} />
        <WaterProgressBar className={css.progressBar} />
        <AddWaterBtn className={css.addWaterBtn} sectionName="WaterMainInfo" />
      </Container>
    </Section>
  );
};

export default WaterMainInfo;
