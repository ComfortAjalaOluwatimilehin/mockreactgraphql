
export const update = (state:any, action:any) => {
    const students = action.payload?.students || []
    state.students = [...students]
}
export const changepage = (state:any, action:any) => {
    state.currentPage = action.payload;
}

export const setstudent = (state:any, action:any) => {
    state.student = action.payload?.student;
}