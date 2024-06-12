// const {response} = require("express")

console.log("client side javascrpt file is load!");

fetch("http://localhost:3000/weather?city=New-York").then(response => {
  response.json().then(data => {
    console.log(data);
  });
});

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", async e => {
  e.preventDefault();

  var location = search.value;
  messageOne.textContent = "loading...";
  messageTwo.textContent = "";

  try {
    const weather = await fetch(
      "http://localhost:3000/weather?city=" + encodeURIComponent(location)
    );
  
    messageOne.textContent = location;
    messageTwo.textContent = "Tempearture is " + weather["temp_c"];
  
    const db = await database.create(messageOne, messageTwo)
  
    const file = await filewrite(db)
  
    if (file) {
      return true
    }
  } catch (error) {
    throw error
  }
});
