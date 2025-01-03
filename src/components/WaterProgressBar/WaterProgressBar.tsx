import css from "./WaterProgressBar.module.css";

const WaterProgressBar = () => {
  const progressBar = 50;
  const buildWidth = () => {
    if (progressBar <= 5) {
      return { width: "5%" };
    } else if (progressBar > 100) {
      return { width: "100%" };
    } else {
      return { width: `${progressBar}%` };
    }
  };

  const buildLeft = () => {
    if (progressBar <= 5) {
      return { left: "0" };
    } else if (progressBar > 100) {
      return { left: "calc(100% - 10px)" };
    } else {
      return { left: `calc(${progressBar}% - 10px)` };
    }
  };

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Today</p>
      <span className={css.wrapperProgressBar}>
        <span style={buildWidth()} className={css.progressBar}></span>
        <span style={buildLeft()} className={css.percent}>
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
