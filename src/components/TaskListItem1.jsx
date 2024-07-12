import ButtonDelete from "./Button";

function TaskListItem1() {
  return (
    <div className="todo-list-item">
      <input type="checkbox" id="task1" />
      <label for="task1">Task 1</label>
      <ButtonDelete />
    </div>
  );
}
export default TaskListItem1;
