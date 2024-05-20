import { Route, Routes } from "react-router-dom";
import Employees from "../pages/employeeTable";
import EmployeeById from "../pages/employeeById";
import AddEmployee from "../pages/addEmployee";

export const EmployeesRoutes = () => (
  <Routes>
    <Route path="/" element={<Employees />} />
    <Route path="/:id" element={<EmployeeById />} />
    <Route path="/add-employee" element={<AddEmployee />} />
  </Routes>
);
