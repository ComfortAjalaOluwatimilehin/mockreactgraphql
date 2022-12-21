export interface Student {
  id: number | string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  status: Status;
}

export enum Status {
  EXPELLED = "EXP",
  GRADUATED = "GRAD",
  ENROLLED = "ENR",
}

export enum Gender {
  GIRL = "girl",
  BOY = "boy",
  OTHER = "other",
}

export enum PageState {
  LIST = "L",
  DETAILS = "D",
  FORM = "F",
  DELETE = "DEL",
}

export interface IStudentsProps {
  rows:any[]
  columns:any[]
}
export interface IStudentProps {}
export interface FormProps {}

export enum ACTIONS {
  ADD = "add",
  UPDATE_STUDENTS = "updateStudents",
  REMOVE = "remove",
  CHANGE_PAGE = "changepage",
}

export interface TableColumn {
  id: any;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export enum GRAPHQL_HANDLERS {
  FETCH = "GET_STUDENTS",
  DELETE = "DELETE_STUDENTS",
  ADD = "ADD_STUDENTS",
  UPDATE = "UPDATE_STUDENTS",
}


export interface InitalState{
  students:Student[],
  currentPage:PageState
}


export enum STUDENT_TABLE_LABELS{

  
}