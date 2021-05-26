import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { debounce, throttle } from "lodash";

export default function CountriesAPI() {
  // cors
  const headers = {
    "Content-Type": "text/plain",
  };

  // state for all country
  const [countries, setCountries] = useState([]);
  // state for searching
  const [search, setSearch] = useState(null);

  // get name api
  const getAPI = (name) => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${name}`, { headers })
      .then((res) => {
        console.log(res.data);

        setCountries(res.data);
        setSearch(res.data);
      });
  };

  // debounce function
  const delayedHandleChange = debounce((eventData) => getAPI(eventData), 500);

  useEffect(async () => {
    await axios

      .get("https://restcountries.eu/rest/v2/all", { headers })
      .then((res) => {
        console.log(res.data);

        setCountries(res.data);
        setSearch(res.data);
      });
  }, []);

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
              if (event.target.value !== "") {
                delayedHandleChange(event.target.value);
              } else {
                setSearch(countries);
              }
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
