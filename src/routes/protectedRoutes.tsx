import MainLayout from "../components/mainLayout";
import Mapper from "../components/mapper/index.tsx";
import { EmployeesRoutes } from "../feature/employees/routes/index.tsx";
import { PayrollRoutes } from "../feature/payroll/routes/index.tsx";

import { UnauthorisedFallback } from "../utils/fallbacks.tsx";

export const protectedRoutes = [
  { path: "/", element: <Mapper /> },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/employees/*", element: <EmployeesRoutes /> },
      { path: "/payroll/*", element: <PayrollRoutes /> },
      { path: "*", element: <UnauthorisedFallback /> },
    ],
  },
];
