import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="w-screen h-screen grid grid-rows-1">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
