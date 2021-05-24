import React, { Fragment, useEffect, useRef, useState } from "react";

export default function Input() {
  
  const [count, setCount] = useState(null);

  const [play, setPlay] = useState(false);

  const [pause, setPause] = useState(true);

  const [input, setInput] = useState(true);

  useEffect(() => {
    if (!pause && play > 0) {
      const id = setInterval(() => {
        setPlay(play - 1);
      }, 1000);

      return () => {
        console.log(play);
        clearInterval(id);
        if (play <= 1) {
          setInput(true);
          setPause(true);
        }
      };
    }
  }, [pause, play]);
  const validation = () => {
    if (!isNaN(count)) {
      return true;
    } else {
      console.log("please input a number ");
      return false;
    }
  };

  const empty = () => {
    if (count === null || count === "") {
      return false;
    } else {
      return true;
    }
  };

  const negative = () => {
    if (Math.floor(count) <= 0 && count !== "" && count !== null) {
      return false;
    } else {
      return true;
    }
  };
  console.log(validation());

  return (
    <Fragment>
      <div className="mt-5 input-group input-group-lg">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            Number
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Large"
          disabled={!input}
          aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        {empty() && validation() && negative() ? (
          <Fragment>
            <button
              type="submit"
              onClick={() => {
                if (!play) {
                  setPlay(count);
                }
                if (input) {
                  setInput(false);
                }
                setPause(!pause);
                console.log(pause);
              }}
              className="btn btn-primary"
            >
              {pause ? "play" : "pause"}
            </button>
          </Fragment>
        ) : (
          <button type="submit" className="btn btn-primary" disabled>
            Play
          </button>
        )}
      </div>
      <div>
        {!empty() ? (
          <p style={{ color: "red" }}>please input number</p>
        ) : (
          <Fragment />
        )}

        {!validation() ? (
          <p style={{ color: "red" }}>Invalid input. Must be a number </p>
        ) : (
          <Fragment />
        )}

        {!negative() ? (
          <p style={{ color: "red" }}>Number must be greater than 0</p>
        ) : (
          <Fragment />
        )}
      </div>
      <h2 className="mt-5 text text-center">Countdown: {play}</h2>
    </Fragment>
  );
}
