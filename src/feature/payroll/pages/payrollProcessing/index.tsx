import {
  Button,
  Col,
  Descriptions,
  DescriptionsProps,
  Flex,
  Space,
  Typography,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmployeeData,
  selectPayrollDate,
  selectSelectedForPayroll,
  updateEmployeeData,
} from "../../../employees/slice/employeeSlice";
import { Employee } from "../../../../constants/employeesConstants";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const PayrollProcessing = () => {
  const selectedForPayroll = useSelector(selectSelectedForPayroll);
  const employeeData = useSelector(selectEmployeeData);
  const payrollDate = useSelector(selectPayrollDate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function calculateTotalSalary(employee: Employee): number {
    const totalAllowances = Object.values(employee.allowance).reduce(
      (acc, curr) => acc + curr,
      0
    );
    const totalAdditions = Object.values(employee.addition).reduce(
      (acc, curr) => acc + curr,
      0
    );
    const totalDeductions = Object.values(employee.deductions).reduce(
      (acc, curr) => acc + curr,
      0
    );

    return (
      employee.basicSalary + totalAllowances + totalAdditions - totalDeductions
    );
  }

  const checkFinalAmount = () => {
    let finalTotalSalary = 0;
    for (const employee of selectedForPayroll) {
      finalTotalSalary += calculateTotalSalary(employee);
    }
    return finalTotalSalary;
  };
  const items: DescriptionsProps["items"] = [
    {
      label: "Payroll Amount",
      children: `AED ${checkFinalAmount()}`,
    },
    {
      label: "Payroll Date",
      children: payrollDate,
    },
    {
      label: "Employees",
      children: selectedForPayroll.length,
    },
  ];

  const handleSubmitPayroll = () => {
    const selectedForPayrollIds = selectedForPayroll.map((el) => el.employeeId);
    const finalData = employeeData.map((el) => {
      if (selectedForPayrollIds.includes(el.employeeId)) {
        return {
          ...el,
          lastSalaryProcessedMonth: payrollDate,
        };
      }
      return el;
    });
    dispatch(updateEmployeeData(finalData));
    navigate("/payroll/payroll-success");
  };

  return (
    <Col>
      <Flex justify="space-between" align="center">
        <Title level={2}> Review payroll</Title>
        <Space>
          <Button>Cancel</Button>
          <Button onClick={handleSubmitPayroll} type="primary">
            Submit Payroll
          </Button>
        </Space>
      </Flex>
      <Col className="w-full p-4 bg-white ">
        <span>
          Please confirm whether the following information is correct before
          submitting payroll.
        </span>
        <Col className="mt-4">
          <Descriptions
            bordered
            column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
            items={items}
          />
        </Col>
      </Col>
    </Col>
  );
};

export default PayrollProcessing;
