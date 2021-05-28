import "./App.css";

//import history
import { createBrowserHistory } from "history";

//import route
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
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
        <Switch>
          <Route component={Home} path="/home"></Route>
          <Route component={PageLogin} exact path="/login" />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
