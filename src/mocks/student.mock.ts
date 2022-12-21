import { Gender, Status, Student } from "../types/interfaces";

export const studentMock: Student = {
  id:"1",
  age: 10,
  firstName: "Messi",
  gender: Gender.BOY,
  lastName: "Kendy",
  status: Status.ENROLLED,
};
