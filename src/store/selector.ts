import { InitalState, Student, TableColumn } from './../types/interfaces';
export const GET_ROWS = ({state}:{state:InitalState}) : Student[] => {
    return state.students;
}
export const GET_COLUMNS = ({state}:{state:InitalState}) : TableColumn[] => {
    if(!state || state.students?.length === 0) return []
   return Object.keys(state.students[0]).map((key) => ({id:key,  label:key, }))
}
export const GET_CURRENT_PAGE = ({state}:{state:InitalState}) => {
    return state.currentPage
}

export const GET_STUDENTS = ({state}:{state:InitalState}) => {
    return state.currentPage
}

