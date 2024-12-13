import { Outlet, useLocation } from "react-router-dom";

import AdvantagesSection from "../AdvantagesSection/AdvantagesSection.tsx";
import useResponsive from "../../hooks/useResponsive.ts";

const SharedLayout = () => {
  const location = useLocation();
  const { isDesktop } = useResponsive();
  // Маршрути, на яких не потрібно показувати AdvantagesSection
  const hideAdvantagesOnRoutes = ["/signup", "/signin"];

  // Логіка рендерингу AdvantagesSection
  const showAdvantages =
    isDesktop || !hideAdvantagesOnRoutes.includes(location.pathname);

  return (
    <>
      <Outlet />
      {showAdvantages && <AdvantagesSection />}
    </>
  );
};

export default SharedLayout;
