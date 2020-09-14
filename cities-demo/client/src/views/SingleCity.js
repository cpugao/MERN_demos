import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleCity = (props) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        // console.log(res);
        setCity(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (city === null) {
    return "Loading...";
  }

  return (
    <div className="" key={city._id}>
      <h3>{city.name}</h3>
      <p>Population: {city.population}</p>
      <img width="100%" src={city.imgUrl} alt={city.name} />
    </div>
  );
};

export default SingleCity;
