import { GRAPHQL_HANDLERS } from "./../../types/interfaces";
export const DELETE = `

mutation ${GRAPHQL_HANDLERS.DELETE}($id: String!) {
    delete(id: $id) {
      id
    }
  }
`;
