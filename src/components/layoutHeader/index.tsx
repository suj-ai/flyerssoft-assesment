import { Col, Layout, Select, Tooltip } from "antd";
import { DownIcon, NotificationIcon, PersonImage } from "../../assets/icons";
import { useEffect, useRef, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { logout } from "../../feature/auth/slice/authSlice";

const { Header } = Layout;

/**
 * LayoutHeader component for the application.
 *
 * @param {object} props - The props for the component.
 * @param {boolean} props.collapsed - The current state of the sidebar (collapsed or not).
 * @param {Function} props.setCollapsed - The function to set the state of the sidebar.
 * @param {string} props.colorBgContainer - The background color for the header.
 */

type LayoutHeaderProps = {
  colorBgContainer: string;
};

const LayoutHeader = ({ colorBgContainer }: LayoutHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const notificationRef = useRef(null);
  useOnClickOutside(notificationRef, () => {
    setIsVisible(false);
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, [isLoading]);
  return (
    <Header
      style={{ backgroundColor: colorBgContainer }}
      className="border-b border-gray-300 flex items-center justify-between"
    >
      <Col>
        <Select
          style={{ width: 300, border: "none" }}
          defaultValue={"Flyers soft"}
          options={[
            { value: "Flyers soft", label: "Flyers Soft Private LTD" },
            { value: "Google", label: "Google" },
            { value: "Facebook", label: "Facebook" },
            { value: "Apple", label: "Apple" },
          ]}
        />
      </Col>
      <Col className="flex items-center justify-center gap-5">
        <Col
          className="flex items-center cursor-pointer"
          onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
          ref={notificationRef}
        >
          <NotificationIcon />
        </Col>
        <Col className="flex items-center ml-[30px]">
          <PersonImage />
          <Col className="flex items-center ml-[10px]">
            <span className="text-black font-semibold text-sm">Dev Team</span>
            <div className="ml-[10px] flex items-center">
              <DownIcon />
            </div>
          </Col>
        </Col>
        <Tooltip title="logout">
          <IoIosLogOut
            className="text-xl cursor-pointer"
            onClick={() => dispatch(logout())}
          />
        </Tooltip>
      </Col>
    </Header>
  );
};

export default LayoutHeader;
