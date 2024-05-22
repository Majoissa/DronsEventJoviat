import { ChakraProvider } from "@chakra-ui/react";
import { Route, Switch, Router } from "wouter";
import HomePage from "./Components/Home";
import RoundPage from "./Components/RoundPage";
import Results from "./Components/Results";
import Nav from "./Components/Nav/Nav";
import ResgistrationPage from "./Form/Resgistration";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/results" component={Results} />
          <Route path="/registration" component={ResgistrationPage} />
          <Route path="/" component={HomePage} />
          <Route path="/round1" component={() => <RoundPage round="1" />} />
          <Route path="/round2" component={() => <RoundPage round="2" />} />
          <Route
            path="/final-round"
            component={() => <RoundPage round="final" />}
          />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
