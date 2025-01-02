import css from "./WaterDailyNorma.module.css";

const WaterDailyNorma = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.dailyNorma}>1.5 L</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
