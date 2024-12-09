window.addEventListener("load", sidenVises);

let point;
let liv;
let speed;

const good1 = document.querySelector("#good_container1");
const good2 = document.querySelector("#good_container2");
const good3 = document.querySelector("#good_container3");

const bad1 = document.querySelector("#bad_container1");
const bad2 = document.querySelector("#bad_container2");

function randomNum(max) {
  return Math.floor(Math.random() * max) + 1;
}

function sidenVises() {
  console.log("sidenVises");

  //Skjul andre skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");

  //Vis startskærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", startSpil);
}

function startSpil() {
  console.log("startSpil");

  //Afspil baggrunds musik og stop andet
  document.querySelector("#Bag_musik").play();
  document.querySelector("#Bag_musik").volume = 0.05;

  document.querySelector("#Fart").pause();
  document.querySelector("#Flush").pause();

  //Skjul andre skærme
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");

  //Nulstil point og udskriv
  point = 0;
  document.querySelector("#point").textContent = point
    .toString()
    .padStart(2, "0");

  //Nulstil point og udskriv
  liv = 3;
  document.querySelector("#liv1").classList.remove("hide");
  document.querySelector("#liv2").classList.remove("hide");
  document.querySelector("#liv3").classList.remove("hide");

  //reset speed
  speed = 1;

  //Starter timer-animation (timer)
  document.querySelector("#sand").classList.add("timer");

  //Når animation er færdig starter funktion stopSpillet()
  document.querySelector("#sand").addEventListener("animationend", stopSpillet);

  //Start fald-animationer, giv en random position (GOOD 1)
  good1.classList.add(
    "fald",
    "pos" + randomNum(5),
    "delay" + randomNum(4),
    "speed" + speed
  );
  //Lyt efter klik
  good1.addEventListener("mousedown", goodClickHandler);
  //Lyt efter fald-animationer er kørt en gang
  good1.addEventListener("animationiteration", goodReset);

  //Start fald-animationer, giv en random position (GOOD 2)
  good2.classList.add(
    "fald",
    "pos" + randomNum(5),
    "delay" + randomNum(4),
    "speed" + speed
  );
  //Lyt efter klik
  good2.addEventListener("mousedown", goodClickHandler);
  //Lyt efter fald-animationer er kørt en gang
  good2.addEventListener("animationiteration", goodReset);

  //Start fald-animationer, giv en random position (GOOD 3)
  good3.classList.add(
    "fald",
    "pos" + randomNum(5),
    "delay" + randomNum(4),
    "speed" + speed
  );
  //Lyt efter klik
  good3.addEventListener("mousedown", goodClickHandler);
  //Lyt efter fald-animationer er kørt en gang
  good3.addEventListener("animationiteration", goodReset);

  //Start fald-animationer, giv en random position (BAD 1)
  bad1.classList.add("fald", "pos" + randomNum(5), "delay" + randomNum(4));
  //Lyt efter klik
  bad1.addEventListener("mousedown", badClickHandler);
  //Lyt efter fald-animationer er kørt en gang
  bad1.addEventListener("animationiteration", badReset);

  //Start fald-animationer, giv en random position (BAD 2)
  bad2.classList.add("fald", "pos" + randomNum(5), "delay" + randomNum(4));
  //Lyt efter klik
  bad2.addEventListener("mousedown", badClickHandler);
  //Lyt efter fald-animationer er kørt en gang
  bad2.addEventListener("animationiteration", badReset);
}

function stopSpillet() {
  console.log("stopSpillet");

  //Reset timer
  document.querySelector("#sand").classList.remove("timer");

  //Slet alle classes og fjern alle eventlistenere fra good1
  good1.classList = "";
  good1.firstElementChild.classList = "";
  good1.addEventListener("mousedown", goodClickHandler);
  good1.addEventListener("animationiteration", goodReset);
  good1.addEventListener("animationend", goodReset);

  //Slet alle classes og fjern alle eventlistenere fra good2
  good2.classList = "";
  good2.firstElementChild.classList = "";
  good2.addEventListener("mousedown", goodClickHandler);
  good2.addEventListener("animationiteration", goodReset);
  good2.addEventListener("animationend", goodReset);

  //Slet alle classes og fjern alle eventlistenere fra good3
  good3.classList = "";
  good3.firstElementChild.classList = "";
  good3.addEventListener("mousedown", goodClickHandler);
  good3.addEventListener("animationiteration", goodReset);
  good3.addEventListener("animationend", goodReset);

  //Slet alle classes og fjern alle eventlistenere fra bad1
  bad1.classList = "";
  bad1.firstElementChild.classList = "";
  bad1.addEventListener("mousedown", badClickHandler);
  bad1.addEventListener("animationiteration", badReset);
  bad1.addEventListener("animationend", badReset);

  //Slet alle classes og fjern alle eventlistenere fra bad1
  bad2.classList = "";
  bad2.firstElementChild.classList = "";
  bad2.addEventListener("mousedown", badClickHandler);
  bad2.addEventListener("animationiteration", badReset);
  bad2.addEventListener("animationend", badReset);

  //Gå til levelComplete eller gameOver
  if (liv == 0) {
    gameOver();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function levelComplete() {
  console.log("levelComplete");

  //LYD: Stop og start ny lyd
  document.querySelector("#Bag_musik").pause();
  document.querySelector("#Fart").play();
  document.querySelector("#Fart").volume = 0.2;

  //Vis levelComplete skærm
  document.querySelector("#level_complete").classList.remove("hide");

  if (point >= 20) {
    //Meget god
    document.querySelector("#level_complete_points").textContent =
      "Du fik " + point + " point. Mega godt!";
  } else if (point >= 15) {
    //Rimlig god
    document.querySelector("#level_complete_points").textContent =
      "Du fik " + point + " point. Remlig godt";
  } else {
    //Du er okay
    document.querySelector("#level_complete_points").textContent =
      "Du fik " + point + " point. Du er opkay.";
  }

  //Klik på genstart1
  document.querySelector("#genstart2").addEventListener("click", startSpil);
}

function gameOver() {
  console.log("gameOver");

  //LYD: Stop og start ny lyd
  document.querySelector("#Bag_musik").pause();
  document.querySelector("#Flush").play();
  document.querySelector("#Flush").volume = 0.2;

  document.querySelector("#game_over").classList.remove("hide");

  if (liv == 0) {
    document.querySelector("#game_over_points").textContent =
      "Du skal ikke klikke på sandpapiret!";
  } else {
    document.querySelector("#game_over_points").textContent =
      "Du fik kun " + point + " point!";
  }

  //Klik på genstart2
  document.querySelector("#genstart1").addEventListener("click", startSpil);
}

function goodClickHandler() {
  console.log("goodClickHandler");

  // Afspil lyd
  document.querySelector("#Aaah").currentTime = 0;

  document.querySelector("#Aaah").play();
  document.querySelector("#Aaah").volume = 0.4;

  //Tæl en op på points og udskriv
  point = point + 1;
  console.log("point: ", point);
  document.querySelector("#point").textContent = point
    .toString()
    .padStart(2, "0");

  if (point >= 5) {
    speed = 3;
  } else if (point >= 3) {
    speed = 2;
  }
  console.log("Speed = " + speed);

  //frys (pause), fald-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("haha");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", goodClickHandler);

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", goodReset);
}

function goodReset() {
  console.log("goodReset");

  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container og fald-animationer på element + random delay
  this.classList.add(
    "fald",
    "pos" + randomNum(5),
    "delay" + randomNum(4),
    "speed" + speed
  );

  //Lyt efter klik på element
  this.addEventListener("mousedown", goodClickHandler);
}

function badClickHandler() {
  console.log("badClickHandler");

  // Afspil lyd
  document.querySelector("#AV1").currentTime = 0;
  document.querySelector("#AV2").currentTime = 0;

  if (Math.random() > 0.5) {
    document.querySelector("#AV1").play();
  } else {
    document.querySelector("#AV2").play();
  }

  document.querySelector("#liv" + liv).classList.add("hide");
  //Tæl en ned på liv og udskriv
  liv--;

  console.log("liv: ", liv);

  //frys (pause), fald-animationen
  this.classList.add("frys");

  //Start forsvind-animationer på sprite element (firstElementChild er sprite elementet)
  this.firstElementChild.classList.add("forsvind");

  //ryd op, så man ikke kan kilkke på den samme flere gange
  this.removeEventListener("mousedown", badClickHandler);

  //Lyt efter forsvind-animationer er færdig
  this.addEventListener("animationend", badReset);

  if (liv <= 0) {
    stopSpillet();
  }
}

function badReset() {
  console.log("badReset");

  //ryd op, fjern alt er på container og sprite
  this.classList = "";
  this.firstElementChild.classList = "";

  //For at kunne genstarte fald animationen, da vi fjener og tilføjer den i samme function
  this.offsetLeft;

  //Giv en random position til container og fald-animationer på element + random delay
  this.classList.add("fald", "pos" + randomNum(5), "delay" + randomNum(4));

  //Lyt efter klik på element
  this.addEventListener("mousedown", badClickHandler);
}
