import { useMediaQuery } from "usehooks-ts";

const useResponsive = () => {
  const isTablet = useMediaQuery("only screen and (min-width: 768px)");
  const isDesktop = useMediaQuery("only screen and (min-width: 1440px)");

  return { isTablet, isDesktop };
};

export default useResponsive;
