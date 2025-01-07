import { PATH } from "../config";
import WEB_PAGES from "../components";

const PathName = Object.keys(PATH, "path");
PathName.splice(0, 1);

const INITIAL_VALUE = PathName.map((item) => {
  const Val = WEB_PAGES[item];

  if (item === "SIGN_IN" || item === "DASHBOARD") {
    return { path: PATH[item], page: <Val />, route: "PublicRoute" };
  }
  if (item === "LANDING_PAGE") {
    return { path: PATH[item], page: <Val />, route: "PublicRoute" };
  }
  return { path: PATH[item], page: <Val />, route: "PrivateRoute" };
});

export default INITIAL_VALUE;
