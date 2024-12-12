import { Link } from "react-router-dom";
import css from "./Logo.module.css";

type logoProps = {
  marginBottom?: string;
};
const Logo = ({ marginBottom }: logoProps) => {
  const logoStyle = {
    marginBottom: marginBottom || "6px",
  };
  return (
    <Link to="/" style={logoStyle} className={css.logo}>
      AquaTrack
    </Link>
  );
};

export default Logo;
