import Container from "../Container/Container.tsx";
import DailyInfo from "../DailyInfo/DailyInfo.tsx";
import MonthInfo from "../MonthInfo/MonthInfo.tsx";
import Section from "../Section/Section.tsx";
import UserPanel from "../UserPanel/UserPanel.tsx";
import css from "./WaterDetailedInfo.module.css";

const WaterDetailedInfo = () => {
  return (
    <Section>
      <Container className={css.container}>
        <UserPanel />
        <DailyInfo />
        <MonthInfo />
      </Container>
    </Section>
  );
};

export default WaterDetailedInfo;
