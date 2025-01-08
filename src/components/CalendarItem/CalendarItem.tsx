import css from "./CalendarItem.module.css";

type CalendarItemProps = {
  key: number;
  day: number;
};

const CalendarItem = ({ day }: CalendarItemProps) => {
  return (
    <li className={css.item}>
      <span className={css.day}>{day}</span>
      <span className={css.percent}>0%</span>
    </li>
  );
};

export default CalendarItem;
