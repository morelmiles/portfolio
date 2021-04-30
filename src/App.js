import React from "react";
import { Switch , Route} from "react-router";
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <>
          <Switch>
              <Route exact path="/" component={HomePage} />
          </Switch>
      </>
  );
}

export default App;;
