import React from "react";

// props is an object that is passed in FROM THE PARENT
class Counter extends React.Component {
  // props are initial values when instantiated, if they need to change, add them to state
  constructor(props) {
    // call the parent constructor and pass our component's props to it so it knows about them
    super(props);

    console.log(props);

    // information about our component that can change
    this.state = {
      clickCount: 0,
      clickTimes: [],
    };

    /** only needed if handleClick is not arrow func
     * `this` keyword when inside our constructor method is pointing to our Counter class
     * .bind tells handleClick to use the current value
     * of `this` so that it doesn't change to undefined
     * when it is executed from a different context with a different value for `this`
     */
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate is a "lifecycle" method
  // whenever the component updates AFTER it as first been added to the page (mounted)
  // this method is automatically called by react, and the prevProps and prevState (and more, see docs) are provided
  // so we can compare them to the current props and state, if needed
  componentDidUpdate(prevProps, prevState) {
    console.log(`componentDidUpdate prevProps:`, prevProps);
    console.log("current props:", this.props);
    console.log(`componentDidUpdate prevState:`, prevState);
    console.log("current state:", this.state);
  }

  // method added to class
  handleClick = () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      // ... is the spread operator, it spreads apart all the items of
      // this.state.clickTimes into the NEW array and then we add one more item at the end
      // we need to pass in a NEW array in order for react to update the page for this particular piece of state
      clickTimes: [...this.state.clickTimes, new Date()],
    });

    // from when we only had clickCount in state
    // this.setState({
    //   clickCount: this.state.clickCount + 1,
    // });
  };

  // class method, named render because react expects a method called render
  // react will call this method to render component's HTML to the DOM / page
  render() {
    return (
      <div>
        <button onClick={this.handleClick} className="btn">
          Clicked {this.state.clickCount}
        </button>

        {/* 
            the below .map returns an array of list items
            [
              <li>click time at 0 idx</li>,
              <li>click time at 1 idx</li>,
              <li>click time at 2 idx</li>,
            ]
          */}
        <ul>
          {this.state.clickTimes.map((clickTime, i) => {
            // a date is an object which is not allowed to be directly added to HTML (only primitives allowed)
            return <li key={i}>{clickTime.toString()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Counter;
