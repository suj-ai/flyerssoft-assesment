import { Button, Result } from "antd";

const ErrorFallback = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={
      <Button onClick={() => window.location.reload()} type="primary">
        Refresh
      </Button>
    }
  />
);
const UnauthorisedFallback = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button
        type="primary"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Back Home
      </Button>
    }
  />
);

function generateEmployeeId() {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let empId = "ST";

  for (let i = 0; i < 4; i++) {
    empId += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return empId;
}

const dateGenerator = () => {
  const currentDate = new Date();
  const options: { value: string; label: string }[] = [];

  for (let i = -6; i <= 6; i++) {
    const date = new Date();
    date.setMonth(currentDate.getMonth() + i);

    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    options.push({
      value: `${month} ${year}`,
      label: `${month} ${year}`,
    });
  }
  return options;
};

export {
  ErrorFallback,
  UnauthorisedFallback,
  generateEmployeeId,
  dateGenerator,
};
