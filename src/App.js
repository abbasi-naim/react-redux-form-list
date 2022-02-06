import "./App.css";
import AppHeader from "./Components/Header";
import ProjectDialogForm from "./Components/ProjectDialogForm";
import UsersDialogForm from "./Components/UsersDialogForm";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div>
      <AppHeader />
      <Typography align="center">
        <ButtonGroup
          size="small"
          aria-label="small button group"
          sx={{ mt: 1, ml: 5 }}
        >
          <ProjectDialogForm />
          <UsersDialogForm />
        </ButtonGroup>
      </Typography>
    </div>
  );
}

export default App;
