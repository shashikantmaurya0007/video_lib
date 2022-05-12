import { useEffect, useState } from "react";

const getIsMobile = () => window.innerWidth <= 800;
const useMobileLayout = () => {
  const [displayMobileLayout, setMobileLayout] = useState(getIsMobile());

  useEffect(() => {
    const resize = () => {
      setMobileLayout(getIsMobile());
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return displayMobileLayout;
};

export { useMobileLayout };
