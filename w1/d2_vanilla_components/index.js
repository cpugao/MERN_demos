import Counter from "./components/Counter.js";
import Player from "./components/Player.js";
import Scoreboard from "./components/Scoreboard.js";
import PlayerModel from "./models/PlayerModel.js";

new Counter(
  {
    headingText: "The Great Counter",
    buttonText: "Increment",
  },
  document.body
);

new Counter(
  {
    headingText: "The Great Counter2",
    buttonText: "Increment2",
  },
  document.body
);

// imagine: list of all players from database, orderBy score desc (highest score first)
const rankedPlayersFromDb = [
  new PlayerModel("Neil", "Mosunic", 9001),
  new PlayerModel("Roy", "Rubanenko", 9000),
  new PlayerModel("Trevor", "Provencio", 5000),
  new PlayerModel("Ray", "Khoo", 2000),
];

const noobyPlayersFromDb = [
  new PlayerModel("Parker", "Brown", 10),
  new PlayerModel("Sean", "Burns", 5),
];

// for (let i = 0; i < rankedPlayersFromDb.length; i++) {
//   Player(
//     {
//       rankText: i + 1,
//       player: rankedPlayersFromDb[i],
//     },
//     document.body
//   );
// }

Scoreboard(
  {
    headingText: "Top Playas",
    rankedPlayers: rankedPlayersFromDb,
  },
  document.body
);

Scoreboard(
  {
    headingText: "Noobs",
    rankedPlayers: noobyPlayersFromDb,
  },
  document.body
);

// const rankLists = [
//   { text: "top players", list: rankedPlayersFromDb },
//   { text: "noobs", list: noobyPlayersFromDb },
// ];

// for (const listOjb of rankLists) {
//   Scoreboard(
//     {
//       headingText: listOjb.text,
//       rankedPlayers: listOjb.list,
//     },
//     document.body
//   );
// }
