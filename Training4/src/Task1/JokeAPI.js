import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

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

export default function JokeAPI() {
  // state
  const [joke, setJoke] = useState([]);

  const [showJoke, setShowJoke] = useState(false);

  const debounceVal = useDebounce(showJoke);
  console.log(debounceVal)
  //   call api
  //   cors problem
  const headers = {
    "Content-Type": "text/plain",
  };

  useEffect(async () => {
    console.log("use effect");
    if (!showJoke) {
      console.log("not showjoke");

      return;
    } else {
      await axios

        .get("https://official-joke-api.appspot.com/jokes/random", { headers })
        .then((res) => {
          console.log("setJoke");

          setJoke(res.data);

          setShowJoke(false);
        });
    }
  }, [debounceVal]);

  console.log("showJoke", showJoke);
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
            setShowJoke(true);
          }}
        >
          Click here to joke
        </button>
      </div>
    </Fragment>
  );
}
