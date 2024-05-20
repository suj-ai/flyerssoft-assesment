import React, { ReactElement, CSSProperties } from "react";
import { Layout, Row, Col, Tooltip, Avatar, Flex } from "antd";
import { SidenavConstants } from "../../constants/sidenavConstants";
import NavigationMenu from "../navigationMenu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const { Sider } = Layout;

type LayoutSiderProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  onBreakpointBreak: boolean;
  setOnBreakpointBreak: (broken: boolean) => void;
  handleLogout?: () => void;
  menus: SidenavConstants;
};

/**
 * Component properties for LayoutSider.
 * @property {boolean} collapsed - Indicates if the sider is collapsed.
 * @property {Function} setCollapsed - Function to set the collapsed state.
 * @property {boolean} onBreakpointBreak - Indicates if the breakpoint is broken.
 * @property {Function} setOnBreakpointBreak - Function to set the breakpoint break state.
 * @property {Function} handleLogout - Function to handle logout.
 * @property {SidenavConstants} menus - Side navigation menu constants.
 */

/**
 * Sidebar layout component for the application.
 *
 * @param {LayoutSiderProps} props - The properties of the component.
 * @returns {ReactElement} The sidebar component.
 */

const LayoutSider: React.FC<LayoutSiderProps> = ({
  collapsed,
  setCollapsed,
  onBreakpointBreak,
  setOnBreakpointBreak,
  menus,
}: LayoutSiderProps): ReactElement => {
  const siderStyle: CSSProperties = {
    // background: "#F9FAFB",
    borderRight: "1px solid #E2E9ED",
    position: onBreakpointBreak ? "absolute" : "unset",
    height: onBreakpointBreak ? "100vh" : "",
    zIndex: 1,
  };

  return (
    <Sider
      style={siderStyle}
      breakpoint="lg"
      collapsedWidth={onBreakpointBreak ? 0 : 80}
      collapsible
      collapsed={collapsed}
      width={250}
      theme="light"
      onBreakpoint={setOnBreakpointBreak}
      onCollapse={setCollapsed}
      trigger={null}
    >
      <Col className="flex flex-col justify-between h-full relative ">
        <Col>
          <Row className="flex items-center justify-center">
            <h1 className="text-xl font-silkscreen">
              {collapsed ? (
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              ) : (
                <Flex className="px-4 gap-2">
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Flex vertical>
                    <span className=" text-text text-base">
                      Sujai Shanmugam
                    </span>
                    <span className=" text-text text-xs font-light">
                      Verifier account
                    </span>
                  </Flex>
                </Flex>
              )}
            </h1>
          </Row>
          <NavigationMenu menus={menus} />
        </Col>
        <Tooltip title="Collapse">
          <Col
            className="bg-primary h-5 w-5 rounded-lg flex items-center justify-center absolute right-[-9px] top-20 cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <FaChevronRight size="9px" color="white" />
            ) : (
              <FaChevronLeft size="9px" color="white" />
            )}
          </Col>
        </Tooltip>
      </Col>
    </Sider>
  );
};

export default LayoutSider;
