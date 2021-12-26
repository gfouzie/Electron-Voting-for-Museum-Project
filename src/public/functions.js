const fs = require("fs");
const path = require("path");

let data = fs.readFileSync(path.resolve(__dirname, "../public/data.json"));
let options = JSON.parse(data);

let MH = options["menstrual_health"];
let SS = options["safer_sex"];
let RSA = options["reassigning_sexual_attitudes"];
let ALL = options["all"];

const saveData = (MH, SS, RSA, ALL) => {
  let options = {
    menstrual_health: MH,
    safer_sex: SS,
    reassigning_sexual_attitudes: RSA,
    all: ALL,
  };
  fs.writeFileSync(
    path.resolve(__dirname, "../public/data.json"),
    JSON.stringify(options)
  );

  console.log("Saved", options);
};

const vote1 = (MH, SS, RSA, ALL) => {
  MH += 1;
  saveData(MH, SS, RSA, ALL);
};

const vote2 = (MH, SS, RSA, ALL) => {
  SS += 1;
  saveData(MH, SS, RSA, ALL);
};

const vote3 = (MH, SS, RSA, ALL) => {
  RSA += 1;
  saveData(MH, SS, RSA, ALL);
};

const vote4 = (MH, SS, RSA, ALL) => {
  ALL += 1;
  saveData(MH, SS, RSA, ALL);
};

const resetVotes = (MH, SS, RSA, ALL) => {
  MH = 0;
  SS = 0;
  RSA = 0;
  ALL = 0;
  let options = {
    menstrual_health: MH,
    safer_sex: SS,
    reassigning_sexual_attitudes: RSA,
    all: ALL,
  };
  fs.writeFileSync(
    path.resolve(__dirname, "../public/data.json"),
    JSON.stringify(options)
  );
};
