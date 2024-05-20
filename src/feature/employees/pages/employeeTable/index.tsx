import {
  Button,
  Col,
  Flex,
  Input,
  Modal,
  Space,
  Table,
  TableColumnsType,
  Tooltip,
  Typography,
} from "antd";
import { IoSearchOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee, selectEmployeeData } from "../../slice/employeeSlice";
import { ColumnGroupType, ColumnType } from "antd/es/table";
import { Employee } from "../../../../constants/employeesConstants";

const { Title } = Typography;

const Employees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteEmployeeData, setDeleteEmployeeData] = useState<Employee | null>(
    null
  );
  const employeeData = useSelector(selectEmployeeData);
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState("");

  const columns: TableColumnsType<Employee> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.name.length - b.name.length,
      render: (name, row) => {
        return (
          <a
            href={`/employees/${row.employeeId}`}
            className="text-text underline hover:text-text "
          >
            {name}
          </a>
        );
      },
    },
    {
      title: "Employee Id",
      dataIndex: "employeeId",

      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Designation",
      dataIndex: "designation",

      sorter: (a, b) => a.designation.length - b.designation.length,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) =>
        record.address.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_, row) => {
        return (
          <Tooltip title="Delete Employee">
            <Button
              onClick={() => {
                setIsModalOpen(true);
                setDeleteEmployeeData(row);
              }}
              icon={<MdDeleteOutline size="20" />}
            ></Button>
          </Tooltip>
        );
      },
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
      <Title level={2}>Employees</Title>
      <Flex justify="space-between" className="mb-6">
        <Col className="w-1/2">
          <Input
            placeholder="Search Employees, Employee Id & Designation"
            suffix={<IoSearchOutline />}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </Col>
        <Space>
          <Button>Employee bulk Upload</Button>
          <Button href="/employees/add-employee" type="primary">
            Add Employee
          </Button>
        </Space>
      </Flex>
      <Col
        className="h-full overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 250px)" }}
      >
        <Table
          size="large"
          sticky
          columns={
            columns as (ColumnGroupType<Employee> | ColumnType<Employee>)[]
          }
          dataSource={filteredData as Employee[]}
          showSorterTooltip={{ target: "sorter-icon" }}
        />
      </Col>
      <Modal
        title="Delete Employee"
        open={isModalOpen}
        centered
        onOk={() => {
          dispatch(deleteEmployee(deleteEmployeeData?.employeeId));
          setDeleteEmployeeData(null);
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
          setDeleteEmployeeData(null);
        }}
      >
        Are you sure you want to delete {deleteEmployeeData?.name} ?
      </Modal>
    </Col>
  );
};

export default Employees;
