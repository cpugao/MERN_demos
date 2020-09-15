import React, { useEffect, useState } from "react";
import "./App.css";

import io from "socket.io-client";

// alternative to setting up the socket with state
// we only want to open the socket one time
const socket = io(":8000");

function App() {
  // const [socket] = useState(() => io(":8000"));
  const [bidItem, setBidItem] = useState(null);
  const [bidAmount, setBidAmount] = useState(null);

  useEffect(() => {
    // add this listener once so we don't have
    // multiple listeners listening for same event
    socket.on("item updated", (updatedBidItem) => {
      setBidItem(updatedBidItem);

      // even though we just setBidItem, it is async bidItem state var is
      // not guaranteed to be updated yet, that's why we use the
      // updatedBidItem.currentPrice here. Alternatively we can use
      // the below useEffect instead.
      setBidAmount((updatedBidItem.currentPrice + 1).toFixed(2));
      console.log(updatedBidItem);
    });

    // this returned callback will be executed when the component
    // "unmounts" (removed from DOM, not being rendered)
    return () => {
      socket.disconnect(true);
    };
  }, []);

  // useEffect(() => {
  //   if (bidItem) {
  //     setBidAmount((bidItem.currentPrice + 1).toFixed(2));
  //   }
  // }, [bidItem]);

  if (bidItem === null) {
    return "Loading...";
  }

  function handleSubmit(event) {
    event.preventDefault();

    // input boxes are always strings, convert to int with + sign
    const bidAmnt = +bidAmount;
    if (bidAmnt > bidItem.currentPrice) {
      socket.emit("new bid", bidAmnt);
    }
  }

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="number"
          value={bidAmount}
          step=".01"
          onChange={(event) => {
            setBidAmount(event.target.value);
          }}
        />

        <button disabled={bidAmount > bidItem.currentPrice ? false : true}>
          Place Bid
        </button>
      </form>

      <div style={{ display: "inline-block", width: "45%" }}>
        <hr />
        <h1>{bidItem.name}</h1>
        <p>Description: {bidItem.description}</p>
        <h4>Start Price: ${bidItem.startPrice}</h4>
        <h3>Current Price: ${bidItem.currentPrice}</h3>
        <hr />
        <div>
          <img src={bidItem.imgUrl} alt={bidItem.name} width="70%" />
        </div>
      </div>

      <div
        style={{ display: "inline-block", width: "45%", verticalAlign: "top" }}
      >
        {bidItem.bids.map((bid, i) => {
          return (
            <p key={i}>
              Amount: {bid.amount} | By: {bid.id} | On: {bid.date}
            </p>
          );
        })}
      </div>

      <hr />
    </div>
  );
}

export default App;
