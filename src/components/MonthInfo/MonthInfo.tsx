import Calendar from "../Calendar/Calendar.tsx";
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
      <Calendar />
    </div>
  );
};

export default MonthInfo;
