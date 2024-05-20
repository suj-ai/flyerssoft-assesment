import React from "react";
import { Col, Steps, theme, Typography } from "antd";
import BasicInfo from "./basicInfo";
import { useSelector } from "react-redux";
import { selectCurrentStep } from "../../slice/employeeSlice";
import SalaryInfo from "./salaryInfo";
import SubmitPage from "./submitPage";

const { Title } = Typography;

const steps = [
  {
    title: "Basic Info",
    content: <BasicInfo />,
  },
  {
    title: "Salary Info",
    content: <SalaryInfo />,
  },
  {
    title: "Submit",
    content: <SubmitPage />,
  },
];

const AddEmployee: React.FC = () => {
  const { token } = theme.useToken();
  const currentStep = useSelector(selectCurrentStep);

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <Col className="overflow-y-auto h-full">
      <Title level={2}>Add Employee</Title>
      <Steps current={currentStep} items={items} />
      <div style={contentStyle}>{steps[currentStep].content}</div>
      <div style={{ marginTop: 24 }}>
        {/* {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
      </div>
    </Col>
  );
};

export default AddEmployee;
