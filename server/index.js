const express = require("express");
const cors = require("cors");

const app = express();

let total = 0;

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "Good news will be brought to you by mail.",
    "Bad news will come to you by mail",
    "You will become president of Canada.",
    "The president of Canada will visit you in your dreams",
    "Nobody will give you a birthday present",
    "Your amazon package will be delivered two days early",
    "Your amazon package will be stolen",
    "The Icelandic Volcano Eyjafjallajokull will erupt in 2026",
  ];

  let randomFortuneIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomFortuneIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/pokerHand", (req, res) => {
  const pokerHands = [
    "Royal Flush!!!",
    "Straight Flush",
    "Pair",
    "Two Pair",
    "Three of a kind",
    "Four of a kind",
    "Flush",
    "Straight",
    "High Card",
    "Full house",
  ];

  let randomPokerIndex = Math.floor(Math.random() * pokerHands.length);
  let randomPokerHand = pokerHands[randomPokerIndex];

  res.status(200).send(randomPokerHand);
});

app.get("/api/opponents", (req, res) => {
  let randomDifference = Math.floor(math.random() * 40);
  let chosenTeam =
    document.getElementById("opponents").selectedOptions[i].value;
  const gameResult = [
    `BYU beats ${chosenTeam} by ${randomDifference} points`,
    `BYU loses to ${chosenTeam} by ${randomDifference} points`,
  ];

  let randomGameIndex = Math.floor(Math.random() * gameResult.length);
  let randomResult = gameResult[randomGameIndex];

  res.status(200).send(randomResult);
});

app.get("/api/restaurant", (req, res) => {
  const restaurantList = [
    "Cheesecake Factory",
    "Wendy's",
    "Mcdonalds",
    "Taco Bell",
    "Chick Fil A",
    "Maggianos",
    "Ruth's Chris",
    "CupBop",
    "Costa Vida",
    "R&R BBQ",
    "One single chocolate chip cookie",
  ];
  let randomRestaurantIndex = Math.floor(Math.random() * restaurantList);
  let randomRestaurant = restaurantList[randomRestaurantIndex];

  res.status(200).send(randomRestaurant);
});

app.listen(4000, () => console.log("Server running on 4000"));
