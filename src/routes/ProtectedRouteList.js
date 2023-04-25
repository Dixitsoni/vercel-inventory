import { lazy } from "react";

const Login = lazy(() => import("../views/auth/Login"));
const DashBoard = lazy(() => import("../views/Products/index"));
const Profile = lazy(() =>
  import("../views/Products/tabComponent/setting/profile/Profile")
);
const ChangePassword = lazy(() =>
  import("../views/Products/tabComponent/setting/changePassword/ChangePassword")
);
const Error404 = lazy(() => import("../views/Error404"));


export const privateRouteList = [
  { path: "/inventory", name: "DashBoard", exact: true, component: DashBoard },
  { path: "/inventory/profile", name: "Profile", exact: true, component: Profile },
  {
    path: "/inventory/changePassword",
    name: "Change Password",
    exact: true,
    component: ChangePassword,
  },
  { path: "*", name: "Error 404 Page", exact: true, component: Error404 },
];

export const publicRouteList = [
  { path: "/login", name: "LOGIN", exact: true, component: Login },
  // { path: "/", name: "LOGIN", exact: true, component: Login },
];


