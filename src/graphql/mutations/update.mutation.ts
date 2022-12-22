import { gql } from "@apollo/client";
import { GRAPHQL_HANDLERS } from "../../types/interfaces";
export const SET_STUDENT = gql`
mutation ${GRAPHQL_HANDLERS.UPDATE}($firstName:String, $lastName:String, $age:Int, $gender:String, $status:String, $id:String){
  setStudent(firstName: $firstName, lastName: $lastName, age: $age, gender: $gender, status: $status, id:$id) {
      students
    }
  }
`;
