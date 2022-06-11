import {BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home"

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
)}

export default App;
