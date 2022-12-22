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
    const { id, ...body } = req.variables
    if(id === undefined){
      const count = db.student.count()
      db.student.create({...body, id: (count + 1).toString()})
    }
    else{
      db.student.update({where:{id: {equals:id}}, data:body} )
    }
    return res(
      ctx.data({
        students:db.student.getAll()
      }),
    )
  }),
  ]