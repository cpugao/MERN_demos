import React, { useEffect, useState } from "react";
import axios from "axios";

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

  if (cities === null) {
    return "Loading...";
  }

  return (
    <div>
      {cities.map((city) => {
        return (
          <div className="card p-3 mb-3" key={city._id}>
            <h3>{city.name}</h3>
            <p>Population: {city.population}</p>
            <img src={city.imgUrl} alt={city.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
