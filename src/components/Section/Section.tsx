import clsx from "clsx";
import css from "./Section.module.css";

type sectionProps = {
  children: React.ReactNode;
  className?: string;
};

const Section = ({ children, className }: sectionProps) => {
  return <section className={clsx(css.section, className)}>{children}</section>;
};

export default Section;
