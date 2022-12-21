import { graphql } from "msw";
import { GRAPHQL_HANDLERS } from "../types/interfaces";
import { db } from "./db";

export const handlers = [
  graphql.query(
    GRAPHQL_HANDLERS.FETCH, (req, res, ctx) => {
    return res(
      ctx.data({
       students: db.student.getAll()
      }),
    )
  }),
  graphql.mutation(GRAPHQL_HANDLERS.ADD, (req, res, ctx) => {
    const { student } = req.variables
    db.student.create(student)
    return res(
      ctx.data({
        students: db.student.getAll()
      }),
    )
  }),
  graphql.mutation(GRAPHQL_HANDLERS.DELETE, (req, res, ctx) => {
    const { id } = req.variables
    db.student.delete(id)
    return res(
      ctx.data({
        students:db.student.getAll()
      }),
    )
  }),
  graphql.mutation(GRAPHQL_HANDLERS.UPDATE, (req, res, ctx) => {
    const { id, body } = req.variables
    db.student.update({...body})
    return res(
      ctx.data({
        students:db.student.getAll()
      }),
    )
  }),
  ]