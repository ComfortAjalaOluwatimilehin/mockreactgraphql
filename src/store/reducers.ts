
export const update = (state:any, action:any) => {
    state.students = action.payload?.students;
}
export const changePage = (state:any, action:any) => {
    state.currentPage = action.payload?.currentPage;
}