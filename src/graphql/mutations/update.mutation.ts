import { GRAPHQL_HANDLERS } from "./../../types/interfaces";
export const UPDATE = `

mutation ${GRAPHQL_HANDLERS.UPDATE}($id: String!) {
    update(id: $id) {
        id
        firstName
        lastName
        age
        gender
        status
    }
  }
`;
