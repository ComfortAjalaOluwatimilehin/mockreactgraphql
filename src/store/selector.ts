import { InitalState, Student } from './../types/interfaces';
export const GET_ROWS = (state:InitalState) : Student[] => {
    console.log(state)
    return []
}
export const GET_COLUMNS = (state:InitalState) : Student[] => {
    return []
}
export const GET_CURRENT_PAGE = (state:InitalState) => {
    return state.currentPage
}