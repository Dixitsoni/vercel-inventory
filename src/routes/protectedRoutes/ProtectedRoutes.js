import { lazy } from "react";
import { Navigate,Route } from "react-router-dom";
import { isAuthenticated } from "../../utils";
import { privateRouteList, publicRouteList } from "../ProtectedRouteList";

const DefaullLayout = lazy(() => import("../../layout/index"));

export const PrivateRouter = () => {
  const PrivateRoute = ({ children }) => {
    const token = isAuthenticated();
    if (!token) {
      return <Navigate to={"/inventory"} replace={true} />;
    }
    return children;
  };

  return privateRouteList.map(({ path, name, exact, component: Component }) => (
    <Route
      path={path}
      exact={exact}
      element={
        <PrivateRoute>
          <DefaullLayout name={name}>
            <Component name={name} />
          </DefaullLayout>
        </PrivateRoute>
      }
    />
  ));
};


export const PublicRouter = () => {
    const PublicRouter = ({ children }) => {
      const token = isAuthenticated();
      if (token) {
        return <Navigate to={"/inventory/dashboard"} replace={true} />;
      }
      return children;
    };
  
    return publicRouteList.map(({ path, name, exact, component: Component }) => (
      <Route
        path={path}
        exact={exact}
        element={
          <PublicRouter>
            <DefaullLayout name={name}>
              <Component name={name} />
            </DefaullLayout>
          </PublicRouter>
        }
      />
    ));
  };
  