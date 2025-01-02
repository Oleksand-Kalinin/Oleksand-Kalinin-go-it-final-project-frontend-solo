import clsx from "clsx";
import sprite from "../../images/sprite.svg";

import css from "./AddWaterBtn.module.css";

type AddWaterBtnProps = {
  sectionName: "WaterMainInfo" | "DailyInfo";
  className?: string;
};
const AddWaterBtn = ({ sectionName, className }: AddWaterBtnProps) => {
  const section = {
    waterMainInfo: "WaterMainInfo",
    dailyInfo: "DailyInfo",
  };

  return (
    <button
      type="button"
      className={clsx(className, css.wrapperBtn, {
        [css.wrapperBtnWaterMainInfo]: sectionName === section.waterMainInfo,
        [css.wrapperBtnDailyInfo]: sectionName === section.dailyInfo,
      })}
    >
      <svg
        className={clsx(css.iconWrapper, {
          [css.iconWaterMainInfo]: sectionName === section.waterMainInfo,
          [css.iconDailyInfo]: sectionName === section.dailyInfo,
        })}
      >
        <use className={css.plusIcon} href={`${sprite}#plus-icon`}></use>
      </svg>
      <span
        className={clsx(css.textBtn, {
          [css.textBtnWaterMainInfo]: sectionName === section.waterMainInfo,
          [css.textBtnDailyInfo]: sectionName === section.dailyInfo,
        })}
      >
        Add water
      </span>
    </button>
  );
};

export default AddWaterBtn;
