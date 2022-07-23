// Selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");
// shift+alt+Down Arrow to duplicate code

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Functions
function showtime() {
  let today = new Date();
  let hour = today.getHours(); // 8
  let min = today.getMinutes(); // 32
  let sec = today.getSeconds(); // 23
  let todaydate = today.toDateString(); // fri nov 6 2020

  //am Pm Format
  const amPm = hour > 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12; // hour=12%12=0

  // output time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${amPm}`;

  date.innerHTML = `${todaydate}`;

  //   hh:mm:ss AM (Required Time Format)
  setTimeout(showtime, 1000);
}
// adding zero to a Number lessthan 10
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setGreeting() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
    greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1577257107590-fc448601f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80")';
    greeting.innerHTML = "Good Afternoon";
  } else if(hour<22){
    document.body.style.backgroundImage='url("https://images.unsplash.com/photo-1472120435266-53107fd0c44a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
    greeting.innerHTML="Good Evening";
  }
  else {
    document.body.style.backgroundImage =
      'url("https://images.unsplash.com/photo-1488866022504-f2584929ca5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80")';
    greeting.innerHTML = "Good Night";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
showtime();
setGreeting();