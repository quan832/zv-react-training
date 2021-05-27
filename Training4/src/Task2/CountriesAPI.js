import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

// optimize time
function useDebounce(text, delay) {
  delay = delay || 500;

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

export default function CountriesAPI() {
  // cors
  const headers = {
    "Content-Type": "text/plain",
  };

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedVal = useDebounce(searchTerm);

  useEffect(async () => {
    await axios

      .get("https://restcountries.eu/rest/v2/all", { headers })
      .then((res) => {
        console.log(res.data);

        setCountries(res.data);
        setSearch(res.data);
      });
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setSearch(countries);
    } else if (debouncedVal) {
      console.log("hello")
      const searchResult = countries.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setSearch(searchResult);
    }
  }, [debouncedVal]);

  const renderCountry = () => {
    return search?.map((country, index) => {
      return (
        <div className="col-3">
          <div className="card mb-3">
            <img src={country.flag} alt="Avatar" style={{ width: "100%" }} />
            <div className="container">
              <h4 style={{ marginTop: "10px" }}>
                <b>{country.name}</b>
              </h4>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <div className="row">{renderCountry()}</div>;
    </Fragment>
  );
}
