import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
  return (
  <Router>
    <Switch>
      
      <Route path="/movie/:id">
        <Detail></Detail>
      </Route>
      <Route >     
       <Home></Home>
      </Route>
    </Switch>
  </Router>
)}

export default App;
