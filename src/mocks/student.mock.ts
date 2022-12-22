import { Gender, IStudent, Status } from "../types/interfaces";

export const studentMock: IStudent = {
  id:"1",
  age: 10,
  firstName: "Messi",
  gender: Gender.BOY,
  lastName: "Kendy",
  status: Status.ENR,
};
