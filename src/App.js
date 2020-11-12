import { remote } from "electron";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

import Navbar from "./components/Navbar";

const useStyles = makeStyles((theme) => ({
  addIcon: {
    "& svg": {
      fontSize: 300,
    },
  },
  container: {
    flexDirection: "column",
    textAlign: "center",
  },
  iconContainer: {
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
    justifyContent: "center",
  },
}));

function App() {
  const [path, setPath] = useState("");
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container className={classes.container}>
        <div className={classes.iconContainer}>
          <IconButton
            edge="start"
            disableRipple
            className={classes.addIcon}
            hidden
            color="grey"
            aria-label="add"
            onClick={async () => {
              const { filePaths } = await remote.dialog.showOpenDialog({
                properties: ["openFile"],
              });
              setPath(filePaths);
            }}
          >
            <AddIcon style={{ justifyContent: "center" }} />
          </IconButton>
        </div>
        <Typography style={{ width: "60%", margin: "auto" }} variant="h5">
          Uh oh... It looks like you have no books open. Click the button above
          to add your first book!
        </Typography>
      </Container>
    </div>
  );
}

export default App;
