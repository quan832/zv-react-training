import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import root
import rootSaga from "./redux/sagas/rootSaga";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, sagaMiddleware } from "./redux/store/index";
import { store } from "./redux/store/index";


sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
