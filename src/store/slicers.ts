import { createSlice } from '@reduxjs/toolkit';
import { ACTIONS, PageState } from './../types/interfaces';
import { changepage, setstudent, update } from './reducers';

export const studentsSlice = createSlice({
  name: 'appState',
  initialState: {
    currentPage:PageState.LIST,
    students:[],
    student:undefined
  },
  reducers: {
    [ACTIONS.UPDATE_STUDENTS]:update,
    [ACTIONS.CHANGE_PAGE]:changepage,
    [ACTIONS.SET_STUDENT]: setstudent
  },
})




// Action creators are generated for each case reducer function
export const {updateStudents, changePage, setActiveStudent} = studentsSlice.actions

export default studentsSlice.reducer