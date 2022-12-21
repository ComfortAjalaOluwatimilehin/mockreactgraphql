import { useQuery } from "@apollo/client/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { GET_STUDENTS } from "./graphql/queries/students.query";
import { GET_COLUMNS, GET_CURRENT_PAGE, GET_ROWS } from "./store/selector";
import { updateStudents } from "./store/slicers";
import { Form } from "./stories/form/form";
import { Student } from "./stories/student/student";
import { Students } from "./stories/students/students";
import { PageState } from "./types/interfaces";
function App() {
  const dispatch = useDispatch()
  const currentPage: PageState = useSelector(GET_CURRENT_PAGE);
  const { data: studentsResponse, loading, error } = useQuery(GET_STUDENTS);
  const rows = useSelector(GET_ROWS)
  const columns = useSelector(GET_COLUMNS)
  /**
   * const onAdd = (student:Student) => {
    console.log("adding")
  }
  const onDelete = (student:Student) => {

  }
  const onUpdate = (student:Student) => {

  }
   */
  const mapper: any = {
    [PageState.LIST]: <Students rows={rows} columns={columns} />,
    [PageState.DETAILS]: <Student />,
    [PageState.FORM]: <Form />,
  };

  useEffect(() => {
    if(studentsResponse){
      dispatch(updateStudents(studentsResponse))
    }
  }, [dispatch, studentsResponse]);
  return <div className="App">{mapper[currentPage]}</div>;
}

export default App;
