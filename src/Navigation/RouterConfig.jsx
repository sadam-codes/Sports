import { Routes, Route } from "react-router-dom";
import WEB_PAGES from "../components";
import { PATH } from "../config";

function RouterConfig() {
  return (
    <Routes>
      <Route path={PATH.NOPAGE} element={<WEB_PAGES.NOPAGE />} />
      <Route path={PATH.DASHBOARD} element={<WEB_PAGES.DASHBOARD />} />
      <Route path={PATH.SIGN_IN} element={<WEB_PAGES.SIGN_IN />} />
      <Route path={PATH.LANDING_PAGE} element={<WEB_PAGES.LANDING_PAGE />} />
    </Routes>
  );
}

export default RouterConfig;
