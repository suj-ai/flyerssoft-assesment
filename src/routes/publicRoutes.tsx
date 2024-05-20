import { Navigate } from "react-router-dom";
import Login from "../components/login";

export const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  { path: "*", element: <Navigate to="/login" /> },
];
