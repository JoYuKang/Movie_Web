import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Header from "./rayout/Header";

function App() {
  return (
  <Router>
    <Header></Header>  
    <Switch>
      <Route path="/movie/:id">
        <Detail></Detail>
      </Route>
      <Route>   
       <Home></Home>
      </Route>
    </Switch>
  </Router>
)}

export default App;
