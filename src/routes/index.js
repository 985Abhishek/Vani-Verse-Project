import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import ResetPassword from "../pages/auth/ResetPassword";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};
// made custom code for importing auth/login
export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout />,
      children: [
        { path: "login", element: <Loginpage /> },
        { path: "register", element: <Registerpage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        { path: "new-password", element: <NewPasswordPage /> },
      ],
    },

    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "Settings", element: <Settings /> },
        { path: "group", element: <GroupPage /> },
        { path: "call", element: <CallPage /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Loginpage = Loadable(lazy(() => import("../pages/auth/Login")));
const Registerpage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/auth/NewPassword"))
);
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const CallPage = Loadable(lazy(() => import("../pages/dashboard/Call")));
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
const ProfilePage = Loadable(lazy(() => import("../pages/dashboard/Profile")));

// orignal code
//   path: "/auth",
// element: <MainLoayout/>,
// Children: [
//   { element: <LoginPage />, path: "login" },
// ]
