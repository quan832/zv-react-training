import Detail from "./Pages/Detail/Detail";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
const routesHome = [
  // {
  //   path: "/",
  //   exact: true,
  //   component: Home,
  // },

  //     path: "/detail:id",
  //     extact: true,
  //     component: ,
  //   },
  { path: "/home", exact: true, component: Home },
  { path: "/profile", exact: true, component: Profile },
  { path: "/user:id", exact: true, component: Detail },
];

export { routesHome };
