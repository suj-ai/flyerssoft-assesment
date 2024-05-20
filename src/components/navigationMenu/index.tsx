import { createElement } from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { SidenavConstants } from "../../constants/sidenavConstants";

const { SubMenu } = Menu;

type NavigationMenuProps = {
  menus: SidenavConstants;
};
/**
 * `NavigationMenu` is a component that renders a navigation menu with Ant Design's `Menu` and `SubMenu` components.
 * The menu items are passed as a prop and are rendered recursively to support nested submenus.
 * Each menu item can have an icon and a label, and can be a link to a path or a submenu with its own items.
 * The currently selected menu item is determined by the current location's pathname.
 *
 * @component
 * @param {object} props - Component props
 * @param {SidenavConstants} props.menus - The menu items to be rendered.
 *
 * @example
 * <NavigationMenu menus={menus} />
 *
 */

const NavigationMenu = ({ menus }: NavigationMenuProps) => {
  const location = useLocation();
  const selectedKeys = [location.pathname];

  const renderMenuItems = (data: SidenavConstants) =>
    data.map((item) => {
      if (item.items) {
        return (
          <SubMenu
            key={item.key}
            icon={item?.icon ? createElement(item.icon) : null}
            title={item.label}
          >
            {renderMenuItems(item.items)}
          </SubMenu>
        );
      }

      return (
        <Menu.Item
          key={item.path}
          icon={item?.icon ? createElement(item.icon) : null}
        >
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      );
    });

  return (
    <Menu mode="inline" selectedKeys={selectedKeys}>
      {renderMenuItems(menus)}
    </Menu>
  );
};

export default NavigationMenu;
