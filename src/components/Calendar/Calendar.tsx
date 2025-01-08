import CalendarItem from "../CalendarItem/CalendarItem.tsx";
import css from "./Calendar.module.css";

const Calendar = () => {
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const days = Array.from(
    { length: getDaysInMonth(currentYear, currentMonth) },
    (_, index) => index + 1
  );

  return (
    <ul className={css.calendarList}>
      {days.map((day, index) => (
        <CalendarItem key={index} day={day} />
      ))}
    </ul>
  );
};

export default Calendar;
