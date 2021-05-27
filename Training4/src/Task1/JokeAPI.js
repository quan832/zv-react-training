import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

<<<<<<< HEAD
import { debounce, throttle } from "lodash";
=======
// optimize time
function useDebounce(text, delay) {
  delay = delay || 1000;

  const [debounced, setDebounced] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(text);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);

  return debounced;
}
>>>>>>> 6949b0caa4cfb04669c70b97f58fe779c771bffa

export default function JokeAPI() {
  // state
  const [joke, setJoke] = useState([]);

<<<<<<< HEAD
=======
  const [showJoke, setShowJoke] = useState(false);

  const debounceVal = useDebounce(showJoke);
  console.log(debounceVal)
>>>>>>> 6949b0caa4cfb04669c70b97f58fe779c771bffa
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
