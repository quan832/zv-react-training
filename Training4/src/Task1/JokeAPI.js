import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import { debounce, throttle } from "lodash";

export default function JokeAPI() {
  // state
  const [joke, setJoke] = useState([]);

  //   call api
  //   cors problem
  const headers = {
    "Content-Type": "text/plain",
  };

  const getAPI = () => {
    axios
      .get("https://official-joke-api.appspot.com/jokes/random", { headers })
      .then((res) => {
        console.log("setJoke");

        setJoke(res.data);
      });
  };

  const delayedHandleChange = debounce(() => getAPI(), 500);

  return (
    <Fragment>
      <h2> {joke.setup ? joke.setup : <Fragment />}</h2>
      <div className="joke">
        <p className="textarea" style={{ color: "tomato" }}>
          {" "}
          {joke.punchline ? joke.punchline : "\nJoke In here"} 😎
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            delayedHandleChange();
          }}
        >
          Click here to joke
        </button>
      </div>
    </Fragment>
  );
}
