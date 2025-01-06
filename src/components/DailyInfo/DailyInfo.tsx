import AddWaterBtn from "../AddWaterBtn/AddWaterBtn.tsx";
import ChooseDate from "../ChooseDate/ChooseDate.tsx";
import WaterList from "../WaterList/WaterList.tsx";
import css from "./DailyInfo.module.css";

const DailyInfo = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperHeader}>
        <ChooseDate />
        <AddWaterBtn sectionName="DailyInfo" />
      </div>

      <WaterList />
    </div>
  );
};

export default DailyInfo;
