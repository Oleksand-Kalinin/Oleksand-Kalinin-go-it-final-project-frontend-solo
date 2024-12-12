import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";
import css from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <>
      <Logo marginBottom="74px" />
      <div className={css.wrapper}>
        <p className={css.textHomePage}>Record daily water intake and track</p>
        <h1 className={css.titleHomePage}>Water consumption tracker</h1>
        <nav className={css.nav}>
          <Link to="/signup" className={css.itemNav}>
            Try tracker
          </Link>
          <Link to="/signin" className={css.itemNav}>
            Sign In
          </Link>
        </nav>
      </div>
    </>
  );
};

export default WelcomeSection;
