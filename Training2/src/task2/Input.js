import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";

export default function Input() {
  const [count, setCount] = useState(null);

  const [play, setPlay] = useState(false);

  const [pause, setPause] = useState(true);

  const [input, setInput] = useState(true);

  // đếm số lần setTimeout được gọi
  const [track, setTrack] = useState(0);

  // lưu state cho setTimeout
  const [time, setTime] = useState(null);

  useEffect(() => {
<<<<<<< HEAD:Trainning2/src/task2/Input.js
    if (!pause) {
      // gọi setTimeOut
      let id = setTimeout(() => {
        console.log("tao settimeout ", track);
        setPlay(play - 1);
        if (play === 1) {
          console.log("hello");
        }
=======
    console.log("use Effect===================");
    // == ? ==
    if (play === 0) {
      setInput(true);
      setPause(true);
    }
  }, [play]);

  useEffect(() => {
    if (!pause) {
      const id = setInterval(() => {
        console.log("effect cua interval===================");
        setPlay(play => play - 1);
>>>>>>> 362a3814c17850e34771776ee85794e871fe80d3:Training2/src/task2/Input.js
      }, 1000);

      // lưu vào state
      setTime(id);

      // đếm số lần setTimeOut gọi
      setTrack(track + 1);

      return () => {
<<<<<<< HEAD:Trainning2/src/task2/Input.js
        console.log("track", track);
        console.log(count);

        // nếu số lần settimeout gọi === số giây nhập vào
        if (track === Math.floor(count)) {
          console.log("ham da clear");
          // dừng setTimeout
          clearTimeout(id);
        }
        console.log("play", play);
        if (play === 1) {
          setInput(true);
          setPause(true);
        }
      };
    }
  }, [pause, play]);
=======
        console.log("clear interval");
        window.clearInterval(id);
      };
    }
    return undefined;
  },[pause]);
>>>>>>> 362a3814c17850e34771776ee85794e871fe80d3:Training2/src/task2/Input.js

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
                  setTrack(0);
                }
                if (input) {
                  setInput(false);
                }
                setPause(!pause);
                console.log("===============================");
                clearTimeout(time);
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
