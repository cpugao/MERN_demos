import React, { useEffect, useState } from "react";
import { navigate, Link } from "@reach/router";

import axios from "axios";

const EditCity = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        console.log("edit city .then!!!");
        // console.log(res);
        setName(res.data.name);
        setPopulation(res.data.population);
        setImgUrl(res.data.imgUrl);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const editedCity = {
      // long-form prop assignment
      name: name,
      // shorthand prop assignment when key name and var name are same
      population,
      imgUrl,
    };

    console.log(editedCity);

    axios
      .put("http://localhost:8000/api/cities/" + props.id, editedCity)
      // response from our server
      .then((res) => {
        console.log(res);
        navigate("/cities");
      })
      .catch((err) => {
        // console.error(err);

        // for validation errors to be sent here, the .catch in the controller method needs:
        // res.status(400).json(err);
        setErrors(err.response.data.errors);
      });
  }

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="form-group">
          <label>Name: </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            // value prop / attribute is only needed when we
            // need to be able to change the input boxes value
            // by setting it's state var
            // without this, only the user can update the input box's value
            value={name}
            type="text"
            className="form-control"
          />
          {errors?.name && (
            <span className="text-danger">{errors.name?.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Population: </label>
          <input
            onChange={(event) => {
              setPopulation(event.target.value);
            }}
            value={population}
            type="number"
            min="0"
            className="form-control"
          />
          {errors?.population && (
            <span className="text-danger">{errors.population?.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>ImgUrl: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            value={imgUrl}
            type="text"
            className="form-control"
          />
          {errors?.imgUrl && (
            <span className="text-danger">{errors.imgUrl?.message}</span>
          )}
        </div>
        <button className="btn btn-success mr-2">Submit</button>
        <Link to="/cities">Cancel</Link>

        {/* <button
          onClick={(event) => {
            // since this button is in a form
            // if we don't want it to submit the form,
            // must preventDefault behavior
            event.preventDefault();
            navigate("/cities");
          }}
          className="btn btn-info"
        >
          Cancel
        </button> */}
      </form>
    </div>
  );
};

export default EditCity;
