import { Button, Flex, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addEmployee,
  selectTempEmployeeData,
  setCurrentStep,
} from "../../slice/employeeSlice";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const SubmitPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tempEmployeeData = useSelector(selectTempEmployeeData);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <span className="font-bold text-text text-xl">
        Are you sure you want to add{" "}
      </span>
      <span className="font-bold  text-primary text-xl">
        {tempEmployeeData?.name} ?
      </span>
      <Text className="mt-5">Make sure check every data is rite</Text>
      <Flex className="gap-5 mt-5">
        <Button>Cancel</Button>
        <Button
          type="primary"
          onClick={() => {
            dispatch(
              addEmployee({
                ...tempEmployeeData,
                key: tempEmployeeData.employeeId,
              })
            );
            dispatch(setCurrentStep(0));
            navigate("/employees");
          }}
        >
          Add Employee
        </Button>
      </Flex>
    </div>
  );
};

export default SubmitPage;
