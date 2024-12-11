import { Outlet, useLocation } from "react-router-dom";

import AdvantagesSection from "../AdvantagesSection/AdvantagesSection.tsx";
import useMediaQuery from "../../hooks/useMediaQuery.ts";

const SharedLayout = () => {
  const location = useLocation();

  // Логіка для перевірки ширини екрану
  const isDesktop = useMediaQuery("(min-width: 1440px)");

  // Маршрути, на яких не потрібно показувати AdvantagesSection
  const hideAdvantagesOnRoutes = ["/signup", "/signin"];

  // Логіка рендерингу AdvantagesSection
  const shouldShowAdvantages =
    isDesktop || !hideAdvantagesOnRoutes.includes(location.pathname);

  return (
    <>
      <Outlet />
      {shouldShowAdvantages && <AdvantagesSection />}
    </>
  );
};

export default SharedLayout;
