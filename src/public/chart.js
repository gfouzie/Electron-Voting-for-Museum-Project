const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.resolve(__dirname, "../public/data.json"));
let options = JSON.parse(data);

let MH = options["menstrual_health"];
let SS = options["safer_sex"];
let RSA = options["reassigning_sexual_attitudes"];
let ALL = options["all"];

window.onload = function () {
  // Bar chart
  new Chart(document.getElementById("doughnut-chart"), {
    type: "doughnut",
    data: {
      labels: [
        "Menstrual Health",
        "Safe Sex",
        "Reassigning Sexual Attitudes",
        " All",
      ],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
          data: [MH, SS, RSA, ALL],
        },
      ],
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: "tf is the question",
      },
    },
  });
};
