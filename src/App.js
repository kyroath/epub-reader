import Button from "@material-ui/core/Button";
import { remote } from "electron";

const showOpenDialog = remote.dialog.showOpenDialog;

function App() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          const { filePaths } = await showOpenDialog({
            properties: ["openFile"],
          });
          console.log(filePaths[0]);
        }}
      >
        Click me!
      </Button>
    </div>
  );
}

export default App;
