import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect,Routes} from "react-router-dom";
import { Home } from "./components/app/pages/home/home";
import { Hotel } from "./components/app/pages/hotel/hotel";
import { List } from "./components/app/pages/list/list";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/hotel" element={<Hotel />}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
