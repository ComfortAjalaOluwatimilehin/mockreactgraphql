import { gql } from "@apollo/client";
import { GRAPHQL_HANDLERS } from "./../../types/interfaces";
export const DELETE_STUDENT =  gql`
mutation ${GRAPHQL_HANDLERS.DELETE}($id: String!) {
    delete(id: $id) {
      id
    }
  }
`;
