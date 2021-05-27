import Home from "./Pages/Home/Home";
import PageLogin from "./Pages/Login/PageLogin";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home,
  },

  //     path: "/detail:id",
  //     extact: true,
  //     component: ,
  //   },
  { path: "/home", exact: true, component: Home },
];

export { routesHome };
