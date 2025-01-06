import AddWaterBtn from "../AddWaterBtn/AddWaterBtn.tsx";
import ChooseDate from "../ChooseDate/ChooseDate.tsx";
import css from "./DailyInfo.module.css";

const DailyInfo = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.wrapperHeader}>
        <ChooseDate />
        <AddWaterBtn sectionName="DailyInfo" />
      </div>

      <div>WaterList</div>
    </div>
  );
};

export default DailyInfo;
