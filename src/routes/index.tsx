/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRoutes } from "react-router-dom";
import { protectedRoutes } from "./protectedRoutes";
import { publicRoutes } from "./publicRoutes";
import { createContext, useState } from "react";
/**
 * The AppRoutes component that manages the routing of the application.
 * It uses the useSelector hook to check if the user is authenticated.
 * If the user is authenticated, it uses the protectedRoutes, otherwise it uses the publicRoutes.
 * The useRoutes hook from react-router-dom is used to create the routing elements.
 *
 * @returns {JSX.Element} The AppRoutes component.
 */
export const isAuthorised = createContext<any>(null);

export const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const routes = isLoggedIn ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return (
    <isAuthorised.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {element}
    </isAuthorised.Provider>
  );
};
