import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import {
  EMPLOYEES_CONSTANTS,
  Employee,
} from "../../../constants/employeesConstants";
import moment from "moment";

type InitialState = {
  employeesData: Employee[];
  addEmployeeStep: number;
  tempEmployeeData: any;
  selectedForPayroll: Employee[];
  currentPayrollMonth: string;
};

const initialState: InitialState = {
  employeesData: EMPLOYEES_CONSTANTS,
  addEmployeeStep: 0,
  tempEmployeeData: {},
  selectedForPayroll: [],
  currentPayrollMonth: moment().format("MMMM YYYY"),
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeesData = [action.payload, ...state.employeesData];
    },
    deleteEmployee: (state, action) => {
      const filteredData = state.employeesData.filter(
        (el) => el.employeeId !== action.payload
      );
      state.employeesData = filteredData;
    },
    setCurrentStep: (state, action) => {
      state.addEmployeeStep = action.payload;
    },
    setTempEmployeeData: (state, action) => {
      state.tempEmployeeData = { ...state.tempEmployeeData, ...action.payload };
    },
    updateEmployeeData: (state, action) => {
      state.employeesData = action.payload;
    },
    updatePayrollEmployees: (state, action) => {
      state.selectedForPayroll = action.payload;
    },
    updatePayrollMonth: (state, action) => {
      state.currentPayrollMonth = action.payload;
    },
  },
});

export const {
  addEmployee,
  deleteEmployee,
  setCurrentStep,
  setTempEmployeeData,
  updateEmployeeData,
  updatePayrollEmployees,
  updatePayrollMonth,
} = employeeSlice.actions;

export default employeeSlice.reducer;

export const selectEmployeeData = (state: RootState) =>
  state.employee.employeesData;
export const selectCurrentStep = (state: RootState) =>
  state.employee.addEmployeeStep;
export const selectTempEmployeeData = (state: RootState) =>
  state.employee.tempEmployeeData;
export const selectSelectedForPayroll = (state: RootState) =>
  state.employee.selectedForPayroll;
export const selectPayrollDate = (state: RootState) =>
  state.employee.currentPayrollMonth;
