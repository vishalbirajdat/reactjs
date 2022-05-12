import { Stack} from "@chakra-ui/layout";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import LoadingBar from "react-top-loading-bar";

function App() {

  const [progress, setProgress] = useState(0)

  return (
    <Stack>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home setProgress={setProgress} />
          </Route>
          
        </Switch>
      </Router>
    </Stack>
  );
}

export default App;
