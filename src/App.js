import logo from "./logo.svg";
import "./App.css";
// import Button from './components/button/button';
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: "oblique",
    color: 'red',
    fontSize: '30px'
  },
  buttonStyles: {
    color: 'green',
    border: 0
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <header className="App-header">
        <Button label="click me please"></Button>
      </header> */}
      <Typography
        variant="h1"
        className={classes.helloThereStyle}
        color="primary"
      >
        Hello there
      </Typography>
      <div className="App">
        <Button className={classes.buttonStyles} color="secondary" variant="outlined">
          This is our first button
        </Button>
      </div>
    </div>
  );
}

export default App;
