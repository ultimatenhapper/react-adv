import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

// import { LazyPage1, LazyPage2, LazyPage3  } from '../lazyload/components/pages';
import { routes } from "../routes/routes";

import logo from "../logo.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map((route) => {
                return (
                  <li key={route.name}>
                    {" "}
                    <NavLink
                      to={route.to}
                      className={({ isActive }) =>
                        isActive ? "nav-active" : ""
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to="/lazy1" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
