import { useMutation, useQuery } from "@apollo/client/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { DELETE_STUDENT } from "./graphql/mutations/remove.mutation";
import { SET_STUDENT } from "./graphql/mutations/update.mutation";
import { GET_STUDENTS } from "./graphql/queries/students.query";
import
  {
    GET_ACTIVE_STUDENT,
    GET_COLUMNS,
    GET_CURRENT_PAGE,
    GET_ROWS
  } from "./store/selectors";
import { changePage, setActiveStudent, updateStudents } from "./store/slicers";
import { StudentForm } from "./stories/form/form";
import { Student } from "./stories/student/student";
import { Students } from "./stories/students/students";
import { IStudent, PageState } from "./types/interfaces";
function App() {
  const dispatch = useDispatch();
  const [setStudent] = useMutation(SET_STUDENT);
  const [deleteStudent] = useMutation(DELETE_STUDENT);
  const currentPage: PageState = useSelector(GET_CURRENT_PAGE);
  const { data: studentsResponse, refetch } = useQuery(GET_STUDENTS);
  const rows = useSelector(GET_ROWS);
  const columns = useSelector(GET_COLUMNS);
  const student = useSelector(GET_ACTIVE_STUDENT);


 /*** SAVE USER INPUTS AND CREATE NEW STUDENT OBJECT  */
  const onSave = (update: Partial<IStudent>) => {
    setStudent({
      variables: { ...update, id:student?.id },
      update: () => {
        dispatch(changePage(PageState.LIST as any));
      },
    });
  };

  /** SET THE SELECTED ROW IN TABLE TO THE ACTIVE STUDENT */
  const onSelect = (student: IStudent) => {
    dispatch(setActiveStudent({ student } as any));
  };

 /** DELETE CURRENT ACTIVE STUDENT PROFILE  */
  const onDelete = () => {
    deleteStudent({
      variables: { id: student?.id },
      update: () => {
        alert(`User ${student?.id} has being deleted`)
        dispatch(setActiveStudent({student:undefined} as any))
      },
    });
  };

  /*** SHOW EDIT FORM AND SET INITIAL VALUES TO ACTIVE STUDENT */

  const onEdit = () => {
    dispatch(changePage(PageState.FORM as any));
  };

/** RESET ACTIVE STUDENT */
  const onGoBack = () => {
    dispatch(setActiveStudent({student:undefined} as any))
  };


  /*** RETURN TO DETAILS */
  const onGoBackToDetails = () => {
    dispatch(changePage(PageState.DETAILS as any))
  }

  /****  SET STUDENTS ON INITIAL RENDER   */
  useEffect(() => {
    if (studentsResponse) {
      dispatch(updateStudents(studentsResponse));
    }
  }, [dispatch, studentsResponse]);

  /*** UPDATE PAGE STATE WHEN STUDENT CHANGES */
  useEffect(() => {
    if (student) {
      dispatch(changePage(PageState.DETAILS as any));
    } else {
      dispatch(changePage(PageState.LIST as any));
    }
  }, [dispatch, student]);

/** ALWAYS REFETCH LIST IF PAGE CHANGES TO STUDENTS TABLE */
  useEffect(() => {
    if(PageState.LIST === currentPage){
      refetch()
    }
  }, [currentPage, refetch])


  const mapper: any = {
    [PageState.LIST]: (
      <Students rows={rows} columns={columns} onSelect={onSelect} />
    ),
    [PageState.DETAILS]: <Student student={student} onDelete={onDelete} onEdit={onEdit} onGoBack={onGoBack} />,
    [PageState.FORM]: <StudentForm onSave={onSave} student={student} onGoBack={onGoBackToDetails} />,
  };
  return <div className="App">{mapper[currentPage]}</div>;
}

export default App;
