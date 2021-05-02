import React from "react";
import { Switch , Route} from "react-router";
import BlogPage from "./pages/Blog";
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/blog" component={BlogPage} />
          </Switch>
      </>
  );
}

export default App;;
