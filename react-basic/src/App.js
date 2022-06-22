import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import Header from "./rayout/Header";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/movie/:id">
      <Header></Header>  
        <Detail></Detail>
      </Route>
      <Route>   
       <Header></Header>  
       <Home></Home>
      </Route>
    </Switch>
  </Router>
)}

export default App;
