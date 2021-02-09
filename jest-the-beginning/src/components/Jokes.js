import React, { useState, useEffect } from "react";
import useAxios from "../useAxios";
import Joke from "./Joke";
import "./Jokes.css";

const Jokes = ({ url }) => {
  const [jokes, setUrl] = useAxios(url);
  const [currentJokes, setCurrentJokes] = useState([]);

  useEffect(() => {
    setUrl(url);
  }, [url]);

  useEffect(() => {
    setCurrentJokes(jokes.value);
  }, [jokes]);

  return (
    <div className="card-container">
      {currentJokes
        ? currentJokes.map((joke, index) => {
            joke.joke = joke.joke.replaceAll("&quot;", '"');

            return <Joke joke={joke} key={index}></Joke>;
          })
        : "Loading..."}
    </div>
  );
};

export default Jokes;
