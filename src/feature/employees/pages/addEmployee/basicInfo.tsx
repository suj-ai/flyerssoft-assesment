import { Button, Col, DatePicker, Flex, Form, Input, InputNumber } from "antd";
import { generateEmployeeId } from "../../../../utils/fallbacks";
import { useState } from "react";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { setCurrentStep, setTempEmployeeData } from "../../slice/employeeSlice";

interface EmployeeFormData {
  name: string;
  designation: string;
  age: number;
  employeeId: string;
  joiningDate: moment.Moment;
  address: string;
}

const BasicInfo = () => {
  const [form] = Form.useForm();
  const [employeeId, setEmployeeId] = useState<string>();
  const dispatch = useDispatch();

  const handleGenerateEmployeeId = () => {
    const generatedId = generateEmployeeId();
    form.setFieldsValue({ employeeId: generatedId });
    setEmployeeId(generatedId);
  };
  const handleFinish = (data: EmployeeFormData) => {
    dispatch(setTempEmployeeData(data));
    dispatch(setCurrentStep(1));
  };

  return (
    <Col className="p-4">
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={handleFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Designation"
          name="designation"
          rules={[{ required: true, message: "Please input Designation!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input Name!" }]}
        >
          <InputNumber min={18} max={100} />
        </Form.Item>

        <Form.Item
          label="Employee Id"
          name="employeeId"
          rules={[{ required: true, message: "Please input Employee Id!" }]}
        >
          <Flex gap={4}>
            <Input value={employeeId} />
            <Button onClick={handleGenerateEmployeeId}>
              Generate Employee ID
            </Button>
          </Flex>
        </Form.Item>
        <Form.Item
          label="Joining Date"
          name="joiningDate"
          rules={[{ required: true, message: "Please input Joining date!" }]}
        >
          <DatePicker
            disabledDate={(current) =>
              current && current > moment().endOf("day")
            }
          />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input Address date!" }]}
        >
          <TextArea showCount />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Col>
  );
};

export default BasicInfo;
