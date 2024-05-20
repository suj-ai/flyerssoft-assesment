import { Button, Col, Form, InputNumber, Typography } from "antd";
import { useDispatch } from "react-redux";
import { setCurrentStep, setTempEmployeeData } from "../../slice/employeeSlice";

const { Title } = Typography;

interface SalaryDetails {
  basicSalary: number;
  awards?: number;
  bonus?: number;
  certification?: number;
  commission?: number;
  entertainment?: number;
  healthInsurance?: number;
  housing?: number;
  incentive?: number;
  loan?: number;
  meals?: number;
  overtime?: number;
  phone?: number;
  rental?: number;
  retirement?: number;
  transport?: number;
  uniform?: number;
}

const SalaryInfo = () => {
  const dispatch = useDispatch();

  const handleFinish = (data: SalaryDetails) => {
    const formattedData = {
      basicSalary: data.basicSalary || 0,
      allowance: {
        transport: data?.transport || 0,
        rental: data?.rental || 0,
        housing: data?.housing || 0,
        loan: data?.loan || 0,
        meals: data?.meals || 0,
        phone: data?.phone || 0,
        entertainment: data?.entertainment || 0,
      },
      addition: {
        bonus: data?.bonus || 0,
        incentive: data?.incentive || 0,
        certification: data?.certification || 0,
        overtime: data?.overtime || 0,
        commission: data?.commission || 0,
        awards: data?.awards || 0,
      },
      deductions: {
        healthInsurance: data?.healthInsurance || 0,
        retirement: data?.retirement || 0,
        uniform: data?.uniform || 0,
      },
    };

    dispatch(setTempEmployeeData(formattedData));
    dispatch(setCurrentStep(2));
  };

  return (
    <Col className="p-4">
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Basic Salary"
          name="basicSalary"
          rules={[{ required: true, message: "Please input Basic Salary!" }]}
        >
          <InputNumber className="w-1/2" />
        </Form.Item>
        <Title level={4}>Allowances</Title>
        <Col className="ml-3">
          <Form.Item label="Transport Allowance" name="transport">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Rental Allowance" name="rental">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Housing Allowance" name="housing">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Loan Allowance" name="loan">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Meals Allowance" name="meals">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Phone Allowance" name="phone">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Entertainment Allowance" name="entertainment">
            <InputNumber className="w-1/2" />
          </Form.Item>
        </Col>
        <Title level={4}>Allowances</Title>
        <Col className="ml-3">
          <Form.Item label="Bonus" name="bonus">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Incentive" name="incentive">
            <InputNumber className="w-1/2" />
          </Form.Item>
          <Form.Item label="Certification" name="certification">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Overtime" name="overtime">
            <InputNumber className="w-1/2" />
          </Form.Item>
          <Form.Item label="Commission" name="commission">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Awards" name="awards">
            <InputNumber className="w-1/2" />
          </Form.Item>
        </Col>
        <Title level={4}>Allowances</Title>
        <Col className="ml-3">
          <Form.Item label="Health Insurance" name="healthInsurance">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Retirement" name="retirement">
            <InputNumber className="w-1/2" />
          </Form.Item>

          <Form.Item label="Uniform" name="uniform">
            <InputNumber className="w-1/2" />
          </Form.Item>
        </Col>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default SalaryInfo;
