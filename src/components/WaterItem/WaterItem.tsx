import sprite from "../../images/sprite.svg";
import css from "./WaterItem.module.css";

const WaterItem = () => {
  return (
    <>
      <svg className={css.iconWater}>
        <use href={`${sprite}#mage_water-glass-fill-icon`}></use>
      </svg>
      <div className={css.info}>
        <p className={css.amountWater}>250 ml</p>
        <p className={css.time}>7:00</p>
      </div>
      <div className={css.wrapperButtons}>
        <button className={css.btn} type="button">
          <svg className={css.btnIcon}>
            <use href={`${sprite}#edit-icon`}></use>
          </svg>
        </button>
        <button className={css.btn} type="button">
          <svg className={css.btnIcon}>
            <use href={`${sprite}#delete-icon`}></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default WaterItem;
