import clsx from "clsx";
import css from "./WaterDailyNorma.module.css";

type WaterDailyNormaProps = {
  className?: string;
};
const WaterDailyNorma = ({ className }: WaterDailyNormaProps) => {
  return (
    <div className={clsx(css.wrapper, className)}>
      <p className={css.dailyNorma}>1.5 L</p>
      <p className={css.text}>My daily norma</p>
    </div>
  );
};

export default WaterDailyNorma;
