import { MdOutlinePayments } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";

type MenuItem = {
  key: string;
  icon?: React.ComponentType;
  label: string;
  path: string;
  items?: MenuItem[];
};

export type SidenavConstants = MenuItem[];

export const SIDENAV_CONSTANTS: SidenavConstants = [
  {
    key: "Employees",
    icon: IoPeopleOutline,
    label: "Employees",
    path: "/employees",
  },
  {
    key: "payroll",
    icon: MdOutlinePayments,
    label: "Run Payroll",
    path: "/payroll",
  },
];
