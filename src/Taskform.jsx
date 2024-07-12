import TextBox from "./components/TextBox";
import ButtonAdd from "./components/ButtonAdd";
function Taskform() {
  return (
    <form className="form-add-task">
      <TextBox />
      <ButtonAdd />
    </form>
  );
}
export default Taskform;
