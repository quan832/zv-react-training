import "./App.css";

//import history
import { createBrowserHistory } from "history";

//import route
import { BrowserRouter, Router, Switch } from "react-router-dom";
// Template
import HomeTemplate from "../../Template/HomeTemplate";
import { routesHome } from "../../routes";
import PageLogin from "../../Pages/Login/PageLogin";

export const history = createBrowserHistory();
//Đối tượng giúp chuyển hướng trang bất kì file nào

const showItemHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={item.exact}
          path={item.path}
          Component={item.component}
        ></HomeTemplate>
      );
    });
  }
};

function App() {
  return (
    <div>
      <BrowserRouter history={history}>
        <Switch>
          {showItemHome(routesHome)}
          <PageLogin exact path="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
