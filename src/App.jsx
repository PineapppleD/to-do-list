import Canvas from "./components/Canvas/Canvas";

import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";

import Dashboard from "./pages/Dashboard/Dashboard";
import Wrapper from "./pages/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Dashboard />
      </Wrapper>
    </>
  );
}

export default App;
