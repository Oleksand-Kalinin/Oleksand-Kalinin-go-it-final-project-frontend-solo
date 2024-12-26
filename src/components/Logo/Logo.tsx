import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import clsx from "clsx";

type logoProps = {
  className?: string;
};
const Logo = ({ className }: logoProps) => {
  return (
    <Link to="/" className={clsx(css.logo, className)}>
      AquaTrack
    </Link>
  );
};

export default Logo;
