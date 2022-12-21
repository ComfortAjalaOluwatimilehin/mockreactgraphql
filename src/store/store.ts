import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from "./slicers";
export default configureStore({
  reducer: {
    state: studentsReducer,
  },
})