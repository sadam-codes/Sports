import React from "react";



const NoPage = React.lazy(() => import("./NoPageFound"));
const AdminPage = React.lazy(() => import("./AdminPage"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const LandingPage = React.lazy(() => import("./LandingPage"));

const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: AdminPage,
  DASHBOARD: Dashboard,
  LANDING_PAGE: LandingPage,
};

export default WEB_PAGES;
