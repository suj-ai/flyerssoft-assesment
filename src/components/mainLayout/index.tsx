import { useState } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import LayoutSider from "../layoutSider";
import LayoutHeader from "../layoutHeader";

import { SIDENAV_CONSTANTS } from "../../constants/sidenavConstants";

/**
 * MainLayout component for the application.
 */

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [onBreakpointBreak, setOnBreakpointBreak] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-screen w-full">
      <LayoutSider
        menus={SIDENAV_CONSTANTS}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onBreakpointBreak={onBreakpointBreak}
        setOnBreakpointBreak={setOnBreakpointBreak}
      />
      <Layout>
        <LayoutHeader colorBgContainer={colorBgContainer} />
        <Content className=" p-3 md:p-6 min-h-280 bg-secondary rounded-lg overflow-y-hidden">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
