import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const element = document.getElementById(hash.replace("#", ""));

    window.scrollTo({
      behavior: element ? "smooth" : "auto",
      top: element ? element.offsetTop : 0
    });
  }, [hash]);

  return null;
}
