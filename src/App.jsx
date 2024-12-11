import Modal from "./components/Modal/Modal";
import Canvas from "./components/Canvas/Canvas";

import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";

import Dashboard from "./pages/Dashboard/Dashboard";
import TaskTemplate from "./pages/Tasks/TaskTemplate/TaskTemplate";
import Wrapper from "./pages/Wrapper/Wrapper";
import Tasks from './pages/Tasks/Tasks'

function App() {
  return (
    <>
      {/* <Wrapper>
        {/* <Dashboard /> */}
        {/* <TaskTemplate pageName={'Vital Tasks'}/> */}
      {/* /* </Wrapper> */} 
      {/* <Modal mode={'add'}/> */}
      {/* <Tasks /> */}
      {/* <Dashboard />*/}
      <Wrapper children={<Dashboard />}/>
    </>
  );
}

export default App;
