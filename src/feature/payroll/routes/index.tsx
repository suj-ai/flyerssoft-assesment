import { Route, Routes } from "react-router-dom";
import PayrollTable from "../pages/payrollTable";
import PayrollProcessing from "../pages/payrollProcessing";
import PayrollSuccess from "../pages/payrollSuccess";
import { UnauthorisedFallback } from "../../../utils/fallbacks";

export const PayrollRoutes = () => (
  <Routes>
    <Route path="/" element={<PayrollTable />} />
    <Route path="/run-payroll" element={<PayrollProcessing />} />
    <Route path="/payroll-success" element={<PayrollSuccess />} />
    <Route path="*" element={<UnauthorisedFallback />} />
  </Routes>
);
