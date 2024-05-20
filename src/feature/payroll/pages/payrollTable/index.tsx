import {
  Button,
  Col,
  Flex,
  Input,
  Select,
  Space,
  Switch,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { useEffect, useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Employee } from "../../../../constants/employeesConstants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEmployeeData,
  selectPayrollDate,
  selectSelectedForPayroll,
  updateEmployeeData,
  updatePayrollEmployees,
  updatePayrollMonth,
} from "../../../employees/slice/employeeSlice";
import moment from "moment";
import { dateGenerator } from "../../../../utils/fallbacks";

const { Title } = Typography;

const PayrollTable = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const dispatch = useDispatch();
  const employeeDataFromStore = useSelector(selectEmployeeData);
  const selectedForPayroll = useSelector(selectSelectedForPayroll);
  const payrollDate = useSelector(selectPayrollDate);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);

  useEffect(() => {
    dispatch(updatePayrollMonth(moment().format("MMMM YYYY")));
    dispatch(updatePayrollEmployees([]));
  }, []);

  useEffect(() => {
    setEmployeeData(employeeDataFromStore);
  }, [employeeDataFromStore]);

  const onSelectChange = (
    newSelectedRowKeys: React.Key[],
    data: Employee[]
  ) => {
    setSelectedRowKeys(newSelectedRowKeys);
    dispatch(updatePayrollEmployees(data));
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: record.lastSalaryProcessedMonth === payrollDate, // Column configuration not to be checked
    }),
  };
  const handleChange = (
    outerElement: string,
    innerElement: string,
    employeeId: string,
    value: string
  ) => {
    const finalData = employeeData.map((el) => {
      if (el.employeeId === employeeId) {
        return {
          ...el,
          [outerElement]: {
            ...el[outerElement],
            [innerElement]: parseInt(value) || 0,
          },
        };
      }
      return el;
    });
    setEmployeeData(finalData);
    dispatch(updateEmployeeData(finalData));
  };
  const columns: TableColumnsType<Employee> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 120,
      showSorterTooltip: { target: "full-header" },
      fixed: "left",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name, row) => {
        return (
          <Flex vertical>
            <a
              href={`/employees/${row.employeeId}`}
              className="text-text underline hover:text-text "
            >
              {name}
            </a>
            <span>{row?.employeeId}</span>
          </Flex>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 120,
      fixed: "left",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Basic Salary",
      dataIndex: "basicSalary",
      width: 120,
      fixed: "left",
      sorter: (a, b) => a.basicSalary - b.basicSalary,
    },
    {
      title: "Total Salary",
      dataIndex: "",
      width: 120,
      fixed: "left",

      render: (record) => {
        const totalSalary =
          record.basicSalary +
          record.allowance?.transport +
          record?.allowance?.rental +
          record?.allowance?.housing +
          record?.allowance?.loan +
          record?.allowance?.meals +
          record?.allowance?.phone +
          record?.allowance?.entertainment +
          record.addition.bonus +
          record.addition.incentive +
          record.addition.certification +
          record.addition.overtime +
          record.addition.commission +
          record.addition.awards -
          record.deductions.healthInsurance -
          record.deductions.retirement -
          record.deductions.uniform;

        return <span>{totalSalary}</span>;
      },
    },
    {
      title: "Transport",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.transport} disabled={true} />;
      },
    },
    {
      title: "Rental",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.rental} disabled={true} />;
      },
    },
    {
      title: "Housing",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.housing} disabled={true} />;
      },
    },
    {
      title: "Loan",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.loan} disabled={true} />;
      },
    },
    {
      title: "Meals",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.meals} disabled={true} />;
      },
    },
    {
      title: "Phone",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.phone} disabled={true} />;
      },
    },
    {
      title: "Entertainment",
      dataIndex: "allowance",
      width: 150,
      render: (allowance) => {
        return <Input value={allowance?.entertainment} disabled={true} />;
      },
    },
    {
      title: "Bonus",
      dataIndex: "addition",
      width: 150,
      render: (addition, row) => {
        return (
          <Input
            disabled={row.lastSalaryProcessedMonth === payrollDate}
            value={addition?.bonus}
            onChange={(e) =>
              handleChange("addition", "bonus", row?.employeeId, e.target.value)
            }
          />
        );
      },
    },
    {
      title: "Incentive",
      dataIndex: "addition",
      width: 150,
      render: (addition, row) => {
        return (
          <Input
            disabled={row.lastSalaryProcessedMonth === payrollDate}
            value={addition?.incentive}
            onChange={(e) =>
              handleChange(
                "addition",
                "incentive",
                row?.employeeId,
                e.target.value
              )
            }
          />
        );
      },
    },
    {
      title: "Certification",
      dataIndex: "addition",
      width: 150,
      render: (addition, row) => {
        return (
          <Input
            disabled={row.lastSalaryProcessedMonth === payrollDate}
            value={addition?.certification}
            onChange={(e) =>
              handleChange(
                "addition",
                "certification",
                row?.employeeId,
                e.target.value
              )
            }
          />
        );
      },
    },
    {
      title: "Overtime",
      dataIndex: "addition",
      width: 150,
      render: (addition, row) => (
        <Input
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          value={addition?.overtime}
          onChange={(e) =>
            handleChange("addition", "overtime", row.employeeId, e.target.value)
          }
        />
      ),
    },
    {
      title: "Commission",
      dataIndex: "addition",
      width: 150,
      render: (addition, row) => (
        <Input
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          value={addition?.commission}
          onChange={(e) =>
            handleChange(
              "addition",
              "commission",
              row.employeeId,
              e.target.value
            )
          }
        />
      ),
    },
    {
      title: "Awards",
      dataIndex: "addition",
      width: 150,
      render: (addition, row) => (
        <Input
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          value={addition?.awards}
          onChange={(e) =>
            handleChange("addition", "awards", row.employeeId, e.target.value)
          }
        />
      ),
    },
    {
      title: "Health Insurance",
      dataIndex: "deductions",
      width: 150,
      render: (deductions, row) => (
        <Input
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          value={deductions?.healthInsurance}
          onChange={(e) =>
            handleChange(
              "deductions",
              "healthInsurance",
              row.employeeId,
              e.target.value
            )
          }
        />
      ),
    },
    {
      title: "Retirement",
      dataIndex: "deductions",
      width: 150,
      render: (deductions, row) => (
        <Input
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          value={deductions?.retirement}
          onChange={(e) =>
            handleChange(
              "deductions",
              "retirement",
              row.employeeId,
              e.target.value
            )
          }
        />
      ),
    },
    {
      title: "Uniform",
      dataIndex: "deductions",
      width: 150,
      render: (deductions, row) => (
        <Input
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          value={deductions?.uniform}
          onChange={(e) =>
            handleChange(
              "deductions",
              "uniform",
              row.employeeId,
              e.target.value
            )
          }
        />
      ),
    },
    {
      title: "End of Service",
      dataIndex: "deductions",
      width: 100,
      fixed: "right",
      render: (_, row) => (
        <Switch
          disabled={row.lastSalaryProcessedMonth === payrollDate}
          title="Is End of Service"
        />
      ),
    },
  ];

  const filteredData = useMemo(() => {
    if (searchKey === "") {
      return employeeData;
    }
    return employeeData.filter((asset) => {
      return (
        (asset?.name || "")?.toLowerCase().includes(searchKey.toLowerCase()) ||
        (asset?.employeeId || "")
          ?.toLowerCase()
          .includes(searchKey.toLowerCase()) ||
        (asset?.designation || "")
          ?.toLowerCase()
          .includes(searchKey.toLowerCase())
      );
    });
  }, [employeeData, searchKey]);

  return (
    <Col className="h-full">
      <Flex align="center" gap={5}>
        <Title level={2}>Run Payroll For </Title>
        <Select
          className="mt-3 ml-2"
          defaultValue={moment().format("MMMM YYYY")}
          style={{ width: 180 }}
          onChange={(month) => dispatch(updatePayrollMonth(month))}
          options={dateGenerator()}
        />
      </Flex>
      <Flex justify="space-between" className="mb-6">
        <Col className="w-2/5">
          <Flex gap={8}>
            <Input
              placeholder="Search Employees, Employee Id & Designation"
              suffix={<IoSearchOutline />}
              onChange={(e) => setSearchKey(e.target.value)}
            />
          </Flex>
        </Col>
        <Space>
          <Button
            disabled={selectedForPayroll.length === 0}
            href="/payroll/run-payroll"
            type="primary"
          >
            Run Payroll
          </Button>
        </Space>
      </Flex>
      <Col
        className="h-full overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 250px)" }}
      >
        <Table
          size="large"
          scroll={{ x: 1500, y: 500 }}
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredData}
        />
      </Col>
    </Col>
  );
};

export default PayrollTable;
