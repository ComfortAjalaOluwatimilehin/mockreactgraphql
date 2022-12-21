import { createSlice } from '@reduxjs/toolkit';
import { ACTIONS, PageState } from './../types/interfaces';
import { addStudent, changePage, removeStudent, updateStudent } from './reducers';

export const studentsSlice = createSlice({
  name: 'appState',
  initialState: {
    students:[],
    pageState:PageState.LIST as PageState
  },
  reducers: {
    [ACTIONS.ADD] : addStudent,
    [ACTIONS.REMOVE]: removeStudent,
    [ACTIONS.UPDATE]:updateStudent,
    [ACTIONS.CHANGE_PAGE]:changePage
  },
})




// Action creators are generated for each case reducer function
export const { add, remove,update, changepage } = studentsSlice.actions

export default studentsSlice.reducer