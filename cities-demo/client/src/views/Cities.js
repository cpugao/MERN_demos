import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Cities = (props) => {
  // console.log(props);

  // before we get a response from our DB, our data is null
  const [cities, setCities] = useState(null);

  // arguments passed to useEffect
  // arg1: call back function
  // arg2: empty array which means run this only once
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => {
        console.log(res);
        setCities(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleDelete(delId) {
    axios
      .delete("http://localhost:8000/api/cities/" + delId)
      .then((res) => {
        // console.log(res);

        const filteredCities = cities.filter((city) => {
          // returns false only when the city._id === delId
          // when false is returned to .filter, it will filter this one out
          return city._id !== delId;
        });

        // update the state to cause a re-render so our city that was
        // deleted from DB will be removed from being displayed as well
        setCities(filteredCities);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  if (cities === null) {
    return "Loading...";
  }

  return (
    <div className="container mt-5">
      {cities.map((city) => {
        return (
          <div className="row mb-2 justify-content-center" key={city._id}>
            <div className="col-md-7 p-2 shadow border rounded text-center">
              <h3>
                <Link to={`/cities/${city._id}`}>{city.name}</Link>
              </h3>
              <p>Population: {city.population}</p>
              <img
                onClick={(event) => {
                  navigate(`/cities/${city._id}`);
                }}
                width="70%"
                src={city.imgUrl}
                alt={city.name}
                style={{ cursor: "pointer" }}
                className="rounded img-thumbnail"
              />
              <div className="mt-2">
                <button
                  onClick={(event) => {
                    navigate(`/cities/${city._id}/edit`);
                  }}
                  className="btn btn-outline-warning mr-1"
                >
                  Edit
                </button>
                <button
                  onClick={(event) => {
                    handleDelete(city._id);
                  }}
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
                {/* <Link to={`/cities/${city._id}/edit`}>
                  <span className="btn btn-warning">Edit</span>
                </Link> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
