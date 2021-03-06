import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const useDocumentTitle = () => {
  const location = useLocation();

  let title_ = location.pathname.split("/").slice(-1)[0];
  title_ = title_ || "home";

  useEffect(() => {
    window.document.title = `FrontEnd|${title_}`;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [title_]);
};

export { useDocumentTitle };
