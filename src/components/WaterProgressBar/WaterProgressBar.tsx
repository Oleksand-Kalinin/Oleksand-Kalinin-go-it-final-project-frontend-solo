import clsx from "clsx";
import css from "./WaterProgressBar.module.css";

type WaterProgressBarProps = {
  className?: string;
};

const WaterProgressBar = ({ className }: WaterProgressBarProps) => {
  const progressBar = 50;
  const buildStylesProgressBar = () => {
    if (progressBar <= 5) {
      return { width: "5%" };
    } else if (progressBar > 100) {
      return { width: "100%" };
    } else {
      return { width: `${progressBar}%` };
    }
  };

  const buildStylesPercent = () => {
    if (progressBar <= 5) {
      return { left: "0" };
    } else if (progressBar > 100) {
      return { left: "calc(100% - 10px)" };
    } else {
      return { left: `calc(${progressBar}% - 10px)` };
    }
  };

  return (
    <div className={clsx(css.wrapper, className)}>
      <p className={css.text}>Today</p>
      <span className={css.wrapperProgressBar}>
        <span
          style={buildStylesProgressBar()}
          className={css.progressBar}
        ></span>
        <span style={buildStylesPercent()} className={css.percent}>
          {progressBar}%
        </span>
      </span>
      <ul className={css.list}>
        <li>0%</li>
        <li>50%</li>
        <li>100%</li>
      </ul>
    </div>
  );
};

export default WaterProgressBar;
