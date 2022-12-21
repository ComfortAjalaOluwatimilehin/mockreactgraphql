import { gql } from "@apollo/client/core";
import { GRAPHQL_HANDLERS } from "./../../types/interfaces";
export const GET_STUDENTS = gql`
query ${GRAPHQL_HANDLERS.FETCH} {
   students{
    id
    firstName
    lastName
    age
    gender
    status
   }
  }
`;
