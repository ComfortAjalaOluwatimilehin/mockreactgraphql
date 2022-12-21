import { studentsMock } from './students.mock';
// src/mocks/db.js
import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  student: {
    id: primaryKey(String),
    firstName: String,
    lastName: String,
    gender:String,
    status:String,
    age:Number
  },
});


for(const student of studentsMock){
    db.student.create({...student, id:student.id.toString()})
}