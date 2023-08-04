import React, { useState, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import Alert from "./Alert";
import AlertsContext from "../context/alerts/alertsContext";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertsContext);
  const onSearchHandler = (e) => {
    e.preventDefault();

    if (searchTerm === "") {
      setAlert("Please enter something", "danger");
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <div className="searchbar">
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="Search For Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
