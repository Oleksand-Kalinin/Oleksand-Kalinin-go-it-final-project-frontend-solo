import { Outlet } from "react-router-dom";

import AdvantagesSection from "../AdvantagesSection/AdvantagesSection.tsx";

function SharedLayout() {
  return (
    <div>
      <Outlet />
      <AdvantagesSection />
    </div>
  );
}

export default SharedLayout;
