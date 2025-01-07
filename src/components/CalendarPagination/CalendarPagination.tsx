import css from "./CalendarPagination.module.css";
import sprite from "../../images/sprite.svg";

const CalendarPagination = () => {
  return (
    <div className={css.currentMonth}>
      <button className={css.btnToggleMonth} type="button">
        <svg className={css.iconToggleMonth}>
          <use href={`${sprite}#chevron-left-icon`}></use>
        </svg>
      </button>
      <p className={css.month}>April, 2024</p>
      <button className={css.btnToggleMonth} type="button">
        <svg className={css.iconToggleMonth}>
          <use href={`${sprite}#chevron-right-icon`}></use>
        </svg>
      </button>
    </div>
  );
};

export default CalendarPagination;
