import "./App.css";
import AppHeader from "./Components/Header";
import ProjectDialogForm from "./Components/ProjectDialogForm";
import UsersDialogForm from "./Components/UsersDialogForm";

function App() {
  return (
    <div>
      <AppHeader />
      <span>
        <ProjectDialogForm />
        <UsersDialogForm />
      </span>
    </div>
  );
}

export default App;
