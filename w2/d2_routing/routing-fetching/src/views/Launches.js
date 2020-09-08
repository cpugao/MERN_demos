import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "@reach/router";

const Launches = (props) => {
  const [launches, setLaunches] = useState(null);

  // useEffect is passed two arguments
  // 1: callback
  // 2: empty array which means the callbacks should
  // only be executed on the first load of this component
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((res) => {
        setLaunches(res.data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("useEffect called us back.");
  }, []);

  if (launches === null) {
    return (
      <img
        src="https://media0.giphy.com/media/duKV1YBPhDtd9efnrR/giphy.gif"
        alt="Elon Is Loading"
      />
    );
  }

  return (
    <div>
      {launches.map((launch) => {
        return (
          <div key={launch.flight_number}>
            <h2>
              <Link to={"/launches/" + launch.flight_number}>
                Mission: {launch.mission_name}
              </Link>
            </h2>
            <p>Date: {launch.launch_date_local}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
