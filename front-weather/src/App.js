import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Historial } from "./screens/Historial/Historial";
import { Home } from "./screens/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/historial" component={Historial} />
      </Switch>
    </Router>
  );
}

export default App;
