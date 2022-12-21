import { useSelector } from 'react-redux/es/exports';
import { Form } from './stories/form/form';
import { Student } from './stories/student/student';
import { Students } from './stories/students/students';
import { PageState } from './types/interfaces';
function App() {
  const currentPage : PageState = useSelector((state:any) => state.page)
  const mapper : any = {

    [PageState.LIST] : <Students />,
    [PageState.DETAILS]: <Student/>,
    [PageState.FORM] : <Form />
  }
  return (
    <div className="App">
      {mapper[currentPage]}
    </div>
  );
}

export default App;
