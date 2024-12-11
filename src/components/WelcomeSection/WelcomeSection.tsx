import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.tsx";

const WelcomeSection = () => {
  return (
    <>
      <Logo />
      <p>Record daily water intake and track</p>
      <h1>Water consumption tracker</h1>
      <Link to="/signup">Try tracker</Link>
      <Link to="/signin">Sign In</Link>
    </>
  );
};

export default WelcomeSection;
