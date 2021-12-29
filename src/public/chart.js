const fs = require("fs");
const path = require("path");

const appDataDirPath = getAppDataPath();
// Create appDataDir if not exist
if (!fs.existsSync(appDataDirPath)) {
  fs.mkdirSync(appDataDirPath);
}

//create file of ot doesnt already exist
let data = fs.readFileSync(
  path.resolve(appDataDirPath, "../public/votingData.json")
);

function getAppDataPath() {
  switch (process.platform) {
    case "darwin": {
      return path.join(
        process.env.HOME,
        "Library",
        "Application Support",
        "Museum Voting"
      );
    }
    case "win32": {
      return path.join(process.env.APPDATA, "Museum Voting");
    }
    case "linux": {
      return path.join(process.env.HOME, ".Museum Voting");
    }
    default: {
      console.log("Unsupported platform!");
      process.exit(1);
    }
  }
}

let options = JSON.parse(data);

let MH = options["menstrual_health"];
let SS = options["safer_sex"];
let RSA = options["reassigning_sexual_attitudes"];
let ALL = options["all"];

window.onload = function () {
  //show and hide graphs when the window loads and reset the button
  var doughnut = document.getElementById("doughnutDiv");
  var bar = document.getElementById("barDiv");
  var btn = document.getElementById("swapGraphBtn");
  btn.innerHTML = "View Bar Graph";
  doughnut.style.display = "block";
  bar.style.display = "none";
  barShowing = true;

  // Doughnut chart
  new Chart(document.getElementById("doughnut-chart"), {
    type: "doughnut",
    data: {
      labels: [
        "Menstrual Health",
        "Safer Sex",
        "Reassigning Sexual Attitudes",
        " All",
      ],
      datasets: [
        {
          backgroundColor: ["#C97C5D", "#C89F96", "#B36A5E", "#E3BCA1"],
          data: [MH, SS, RSA, ALL],
        },
      ],
    },
    options: {
      legend: {
        display: true,
        labels: {
          fontSize: 20,
        },
      },
      title: {
        display: true,
        text: "Which Section Was the Most Educational?",
        fontSize: 50,
        padding: 25,
      },
    },
  });

  // Bar chart
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: [
        "Menstrual Health",
        "Safer Sex",
        "Reassigning Sexual Attitudes",
        " All",
      ],
      datasets: [
        {
          backgroundColor: ["#C97C5D", "#C89F96", "#B36A5E", "#E3BCA1"],
          data: [MH, SS, RSA, ALL],
        },
      ],
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "Which Section Was the Most Educational?",
        fontSize: 50,
        padding: 25,
      },
      scales: {
        scaleLabel: { fontSize: 50 },
        xAxes: [
          {
            ticks: {
              fontSize: 20,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              stepSize: 1,
            },
          },
        ],
      },
    },
  });
};

var barShowing = false;

function swapGraph() {
  var doughnut = document.getElementById("doughnutDiv");
  var bar = document.getElementById("barDiv");
  var btn = document.getElementById("swapGraphBtn");
  console.log("in function");
  if (barShowing == true) {
    btn.innerHTML = "View Pie Chart";
    doughnut.style.display = "none";
    bar.style.display = "block";
    barShowing = false;
    console.log("bar showing true");
  } else {
    btn.innerHTML = "View Bar Graph";
    doughnut.style.display = "block";
    bar.style.display = "none";
    barShowing = true;
    console.log("bar showing false");
  }
}
