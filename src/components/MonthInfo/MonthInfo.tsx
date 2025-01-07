import CalendarPagination from "../CalendarPagination/CalendarPagination.tsx";
import css from "./MonthInfo.module.css";

const MonthInfo = () => {
  return (
    <div>
      <div className={css.header}>
        <p className={css.title}>Month</p>
        <CalendarPagination />
        {/* <button type="button">Diagram</button> */}
      </div>
    </div>
  );
};

export default MonthInfo;
