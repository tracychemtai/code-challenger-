function getPoints() {
  let speed = parseInt(document.getElementById("speed").value, 10) || 0;

  if (speed< 0 || speed >= 136) {
    alert("License Suspended");
    return; // Exit the function early if marks are invalid
  }

  let points =
    speed> 131
      ? "Points : 12 "
      : speed >= 126
      ? "Points : 11 "
      : speed>= 121
      ? "Points : 10 "
      : speed >= 116
      ? "Points : 9"
      : speed >=111 ?
      "Points : 8 "
      : speed >=106 ?
      "Points : 7 ":
      speed >=101 ?
      "Points : 7 ":
      speed >=96 ?
      "Points : 6 ":
      speed >=91 ?
      "Points :5 ": 
      speed >=86 ?
      "Points : 4":
      speed>=81?
      "Points : 3 ":
      speed >=76?
      "Points : 2 ":
      speed >=71?
      "Points : 1 ":
      "ok";

      document.getElementById("result").innerText = `Your Points: ${speed} is: ${points}`;
      }