import logo from "./logo.svg";
import "./App.css";
import { Fragment, useState } from "react";
import Modal from "./task3/Modal";
import Input from "./task2/Input";

function App() {
  // use
  const [isShowing, setIsShowing] = useState(false);
  const [isButton, setIsbutton] = useState("");

  return (
    <div className="App container">
      <h3 className="mt-5  text-center">Task 1,2</h3>

      <button
        type="button"
        class={`btn btn-primary mt-5 ml-5 ${isButton} `}
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => {
          setIsShowing(!isShowing);
          setIsbutton("deleteButton");
        }}
      >
        Launch demo modal
      </button>
      {isShowing ? (
        <Modal
          show={isShowing}
          setShow={setIsShowing}
          setButton={setIsbutton}
        />
      ) : (
        <Fragment />
      )}
      <h3 className="mt-5 text-center">Task 3</h3>
      <div class="row">
        <div className="col-6">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
