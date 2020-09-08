import React, { useEffect, useState } from "react";

import axios from "axios";

const SingleLaunch = (props) => {
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + props.id)
      .then((res) => {
        setLaunch(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("useEffect called us back.");
  }, [props.id]);

  if (launch === null) {
    return "...loading";
  }

  return (
    <div>
      <h2>Mission: {launch.mission_name}</h2>
      <p>Date: {launch.launch_date_local}</p>
      <p>Details: {launch.details}</p>
      <p>Launch Success: {launch.launch_success}</p>
    </div>
  );
};

export default SingleLaunch;
