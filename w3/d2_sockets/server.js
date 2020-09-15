const express = require("express");

const app = express();

const port = 8000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const io = require("socket.io")(server);

// const socketPckg = require("socket.io");
// const io = socketPckg(server);

let totalConnections = 0;

const bidItem = {
  name: "How to actually learn any new programming concept.",
  description: "Programming book.",
  imgUrl: "https://i.redd.it/rslicsmlzcl01.jpg",
  startPrice: 19.95,
  currentPrice: 19.95,
  buyoutPrice: 39.99,
  category: "Books",
  isSold: false,
  bids: [],
};

io.on("connect", (socket) => {
  // console.log(socket);
  totalConnections++;

  console.log(`New bidder connected. ${totalConnections} bidders connected.`);

  socket.emit("item updated", bidItem);

  socket.on("new bid", (newBid) => {
    // or if using a DB, .findByIdAndUpdate
    // .then emit updated info to client
    bidItem.currentPrice = newBid;
    bidItem.bids.push({
      id: socket.id,
      amount: newBid,
      date: new Date(),
    });

    // socket.emit - emit event to just this one socket
    // socket.broadcast.emit - emit to all sockets except this one
    // io.emit - emit event to ALL connected sockets
    io.emit("item updated", bidItem);
  });

  socket.on("disconnect", () => {
    totalConnections--;

    console.log(`Bidder disconnected. ${totalConnections} bidders connected`);
  });
});
