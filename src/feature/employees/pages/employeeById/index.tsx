import { useParams } from "react-router-dom";
import { Col, Flex, Row, Typography } from "antd";
import moment from "moment";
import InfoItem from "../../../../components/ContentTemplate";
import Avatar from "../../../../components/dynamicAvatar";
import { useSelector } from "react-redux";
import { selectEmployeeData } from "../../slice/employeeSlice";

const { Title } = Typography;

const EmployeeById = () => {
  const { id } = useParams();
  const employeesDatafromStore = useSelector(selectEmployeeData);
  const employeeData = employeesDatafromStore?.find(
    (el) => el?.employeeId === id
  );

  return (
    <Col>
      <Title>
        {employeeData?.name} {employeeData?.employeeId}
      </Title>
      <Flex gap={20} className="mb-5">
        <Avatar name={employeeData?.name} />
        <Col className="bg-white h-full w-full rounded-md p-4">
          <InfoItem label="Name" value={employeeData?.name} />
          <InfoItem label="Address" value={employeeData?.address} />
          <InfoItem label="Age" value={employeeData?.age} />
          <InfoItem label="Employee Id" value={employeeData?.employeeId} />
          <InfoItem label="Designation" value={employeeData?.designation} />
          <InfoItem
            label="Joining Date"
            value={moment(employeeData?.joiningDate).format("MMM Do YY")}
          />
          <InfoItem label="Basic Salary" value={employeeData?.basicSalary} />
        </Col>
      </Flex>
      <Row className="bg-white h-full w-full rounded-md p-4 flex justify-between items-start">
        <Col>
          <Title level={5}>Allowance</Title>
          <Col className="ml-3">
            <InfoItem
              label="Transport"
              value={employeeData?.allowance?.transport}
            />
            <InfoItem label="Rental" value={employeeData?.allowance?.rental} />
            <InfoItem
              label="Housing"
              value={employeeData?.allowance?.housing}
            />
            <InfoItem label="Loan" value={employeeData?.allowance?.loan} />
            <InfoItem label="Meals" value={employeeData?.allowance?.meals} />
            <InfoItem label="Phone" value={employeeData?.allowance?.phone} />
            <InfoItem
              label="Entertainment"
              value={employeeData?.allowance?.entertainment}
            />
          </Col>
        </Col>
        <Col>
          <Title level={5}>Addition</Title>
          <Col className="ml-3">
            <InfoItem label="Awards" value={employeeData?.addition.awards} />
            <InfoItem label="Bonus" value={employeeData?.addition?.bonus} />
            <InfoItem
              label="Certification"
              value={employeeData?.addition?.certification}
            />
            <InfoItem
              label="Commission"
              value={employeeData?.addition?.commission}
            />
            <InfoItem
              label="Incentive"
              value={employeeData?.addition?.incentive}
            />
            <InfoItem
              label="Overtime"
              value={employeeData?.addition?.overtime}
            />
          </Col>
        </Col>
        <Col>
          <Title level={5}>Deductions</Title>
          <Col className="ml-3">
            <InfoItem
              label="Health Insurance"
              value={employeeData?.deductions?.healthInsurance}
            />
            <InfoItem
              label="Retirement"
              value={employeeData?.deductions?.retirement}
            />
            <InfoItem
              label="Uniform"
              value={employeeData?.deductions?.uniform}
            />
          </Col>
        </Col>
      </Row>
    </Col>
  );
};

export default EmployeeById;
