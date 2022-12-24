export interface IStudent {
  id: number | string;
  firstName: string;
  lastName: string;
  age: number;
  gender: Gender;
  status: Status;
}

export enum Status {
  EXP="EXPELLED",
  GRAD="GRADUATED",
  ENR="ENROLLED"
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
}

export interface IStudentsProps {
  rows:any[]
  columns:any[]
  onSelect:(student:IStudent) => any
}
export interface IStudentProps {
  student?:IStudent;
  onGoBack:() => any;
  onEdit:() => any;
  onDelete:() => any
}
export interface FormProps {
  student?:IStudent;
  onSave:(student:Partial<IStudent>) => any
  onGoBack:() => any;
}

export enum ACTIONS {
  ADD = "add",
  UPDATE_STUDENTS = "updateStudents",
  REMOVE = "remove",
  CHANGE_PAGE = "changePage",
  SET_STUDENT="setActiveStudent"
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
  UPDATE = "UPDATE_STUDENTS",
}


export interface InitalState{
  students:IStudent[],
  currentPage:PageState,
  student:IStudent
}


export enum STUDENT_TABLE_LABELS{

  
}