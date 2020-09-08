import React from "react";

// a view is just a component that represents a whole page
// a component that is not in the views folder should be a component that represents a small piece of a page, not a whole page
const Homepage = (props) => {
  // has extra props that we did not pass in which come from it's parent <Router> passing more props in
  console.log(props);
  return <div>Homepage</div>;
};

export default Homepage;
