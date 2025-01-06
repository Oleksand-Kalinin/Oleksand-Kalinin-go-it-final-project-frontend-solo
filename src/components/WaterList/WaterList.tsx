import WaterItem from "../WaterItem/WaterItem.tsx";
import css from "./WaterList.module.css";

const WaterList = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <WaterItem />
        <WaterItem />
        <WaterItem />
      </ul>
      <p>Slider</p>
    </div>
  );
};

export default WaterList;
