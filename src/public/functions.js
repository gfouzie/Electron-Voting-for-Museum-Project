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
let options = JSON.parse(data);

let MH = options["menstrual_health"];
let SS = options["safer_sex"];
let RSA = options["reassigning_sexual_attitudes"];
let ALL = options["all"];

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

const saveData = (MH, SS, RSA, ALL) => {
  let options = {
    menstrual_health: MH,
    safer_sex: SS,
    reassigning_sexual_attitudes: RSA,
    all: ALL,
  };
  const appDataDirPath = getAppDataPath();

  // Create appDataDir if not exist
  if (!fs.existsSync(appDataDirPath)) {
    fs.mkdirSync(appDataDirPath);
  }

  fs.writeFileSync(
    path.resolve(appDataDirPath, "../public/votingData.json"),
    JSON.stringify(options)
  );

  console.log("Saved", options);
};

const vote1 = (MH, SS, RSA, ALL) => {
  MH += 1;
  saveData(MH, SS, RSA, ALL);
  window.location.reload();
};

const vote2 = (MH, SS, RSA, ALL) => {
  SS += 1;
  saveData(MH, SS, RSA, ALL);
  window.location.reload();
};

const vote3 = (MH, SS, RSA, ALL) => {
  RSA += 1;
  saveData(MH, SS, RSA, ALL);
  window.location.reload();
};

const vote4 = (MH, SS, RSA, ALL) => {
  ALL += 1;
  saveData(MH, SS, RSA, ALL);
  window.location.reload();
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
    path.resolve(appDataDirPath, "../public/votingData.json"),
    JSON.stringify(options)
  );
};
