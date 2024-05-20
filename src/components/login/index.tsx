import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Row,
  Switch,
  Typography,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { LoginImage } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { login } from "../../feature/auth/slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (data) => {
    console.log("data", data);
    if (
      data?.email === "flyerssoft@gmail.com" &&
      data?.password === "Flyers@123"
    ) {
      dispatch(login(data));
      navigate("/");
    } else {
      message.error("Incorrect email or password");
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Col className=" bg-[#F0F6FB] h-screen w-full flex items-center justify-center">
        <Flex className="container justify-evenly">
          <Flex align="center" justify="center" className="w-2/4">
            <LoginImage />
          </Flex>
          <Col
            sm={24}
            md={18}
            className="flex items-center justify-center w-2/4 "
          >
            <Col
              md={20}
              lg={10}
              className="bg-white drop-shadow-2xl   p-10 rounded-xl"
            >
              <Col className="text-center text-3xl font-medium"> Welcome!</Col>
              <Row className="mt-5">
                <Col xl={24}>
                  <Form.Item
                    name="email"
                    label="Email ID"
                    data-cy="email-input"
                    rules={[{ type: "email", required: true }]}
                    className="font-normal font-poppins"
                  >
                    <Input
                      className="w-[100%]"
                      placeholder="Email or phone number"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col xl={24}>
                  <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true }]}
                    data-cy="password-input"
                    className="font-normal font-poppins"
                  >
                    <Input.Password
                      className="w-[100%]"
                      placeholder="Enter Password"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="mt-0 justify-between">
                <Col>
                  <Switch className="bg-[#f2f2f2] mr-1" />
                  <Typography.Text>Remember Me</Typography.Text>
                </Col>
                <Col>
                  <Typography.Text className="text-primary font-normal cursor-pointer">
                    Forgot password?
                  </Typography.Text>
                </Col>
              </Row>
              <Row className="mt-10">
                <Col xl={24}>
                  <Form.Item>
                    <Button
                      className="w-full"
                      type="primary"
                      size="large"
                      htmlType="submit"
                    >
                      Sign In
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Col>
        </Flex>
      </Col>
    </Form>
  );
};

export default Login;
