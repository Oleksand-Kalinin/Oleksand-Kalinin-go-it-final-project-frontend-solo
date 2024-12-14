import clsx from "clsx";
import css from "./Container.module.css";

type containerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: containerProps) => {
  return <div className={clsx(css.container, className)}>{children}</div>;
};

export default Container;
