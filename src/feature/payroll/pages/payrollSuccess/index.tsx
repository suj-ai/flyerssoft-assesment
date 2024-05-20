import { Button, Result } from "antd";

const PayrollSuccess = () => {
  return (
    <Result
      status="success"
      title="You're Payroll has been submitted successfully!"
      subTitle="Our support team will get in touch with you"
      extra={[
        <Button href="/employees" type="primary" key="console">
          Go to Employees
        </Button>,
        <Button href="/payroll" key="buy">
          Run Another payroll
        </Button>,
      ]}
    />
  );
};

export default PayrollSuccess;
