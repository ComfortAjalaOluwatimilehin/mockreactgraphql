import { GRAPHQL_HANDLERS } from "./../../types/interfaces";
export const FETCH = `

query ${GRAPHQL_HANDLERS.FETCH}() {
   students:{
    id
    firstName
    lastName
    age
    gender
    status
   }
  }
`;
