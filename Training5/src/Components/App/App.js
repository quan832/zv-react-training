import "./App.css";

//import history
import { createBrowserHistory } from "history";

//import route
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
// Template
import HomeTemplate from "../../Template/HomeTemplate";
import PageLogin from "../../Pages/Login/PageLogin";
import Home from "../../Pages/Home/Home";

export const history = createBrowserHistory();
//Đối tượng giúp chuyển hướng trang bất kì file nào

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Route component={Home} exact path="/" />
        <Route component={PageLogin} exact path="/login" />
      </BrowserRouter>
    </div>
  );
}

export default App;
