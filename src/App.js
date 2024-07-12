import "./App.css";
import Heading from "./components/Heading";
import TaskList from "./Tasklist";
import Taskform from "./Taskform";
function App() {
  return (
    <div class="container">
      <Heading />

      <Taskform />

      <TaskList />
    </div>
  );
}

export default App;
