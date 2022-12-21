import { createSlice } from '@reduxjs/toolkit';
import { ACTIONS, PageState } from './../types/interfaces';
import { changePage, update } from './reducers';

export const studentsSlice = createSlice({
  name: 'appState',
  initialState: {
    currentPage:PageState.LIST,
    students:[]
  },
  reducers: {
    [ACTIONS.UPDATE_STUDENTS]:update,
    [ACTIONS.CHANGE_PAGE]:changePage
  },
})




// Action creators are generated for each case reducer function
export const {updateStudents, changepage } = studentsSlice.actions

export default studentsSlice.reducer