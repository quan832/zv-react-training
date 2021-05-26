import React, { Fragment, useEffect, useState, useRef } from "react";

export default function Keylogger() {
  const initialValue = [];
  //   show modal
  const [showModal, setshowModal] = useState(false);

  const [key, setKey] = useState(initialValue);

  useEffect(() => {
    console.log(showModal);
    if (showModal === true) {
      console.log("keydown");

      const event = (event) => {
        setKey((oldArray) => [...oldArray, event.key]);
      };

      const eventListener = window.addEventListener("keydown", event);

      return () => {
        console.log("keyclear");
        window.removeEventListener("keydown", event);
      };
    }
  }, [showModal]);

  return (
    <Fragment>
      <div id="keylogger">
        <div>
          <button
            onClick={() => {
              setshowModal(true);
            }}
          >
            {" "}
            Click here to show modal
          </button>

          <pre id="inputs"></pre>
        </div>
      </div>
      {/* {!showModal && message !== " " ? (
        <h4 id="wordChange">{message}</h4>
      ) : (
        <Fragment />
      )} */}

      <h4 id="wordChange">{key}</h4>
      <div className="text-area">
        {showModal ? (
          <textarea
            id="words"
            // className={`${showModal}`}
            placeholder="Type here to begin"
            spellcheck="false"
          ></textarea>
        ) : (
          <Fragment />
        )}

        {showModal ? (
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => {
              setshowModal(false);
            }}
          >
            Close
          </button>
        ) : (
          <Fragment />
        )}
      </div>
    </Fragment>
  );
}
