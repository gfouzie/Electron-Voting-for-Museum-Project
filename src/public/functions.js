const fs = require('fs');
const path = require('path');

let MH;
let SS;
let RSA;
let ALL;

const getData = () => {
    let data = fs.readFileSync(path.resolve(__dirname, '../public/data.json'));
    let options = JSON.parse(data);

    MH = options["menstrual_health"];
    SS = options["safer_sex"];
    RSA = options["reassigning_sexual_attitudes"];
    ALL = options["all"];

    console.log("Retrieved", options);
}

const saveData = () => {
    let options = {menstrual_health: MH, safer_sex: SS, reassigning_sexual_attitudes: RSA, all: ALL};
    fs.writeFileSync(path.resolve(__dirname, '../public/data.json'), JSON.stringify(options));

    console.log("Saved", options)
}

const vote1 = () => {
    MH += 1;
    console.log(MH,SS,RSA,ALL);
}

const vote2 = () => {
    SS += 1;
    console.log(MH,SS,RSA,ALL);
}

const vote3 = () => {
    RSA += 1;
    console.log(MH,SS,RSA,ALL);
}

const vote4 = () => {
    ALL += 1;
    console.log(MH,SS,RSA,ALL);
}

const resetVotes = () => {
    MH = 0;
    SS = 0;
    RSA = 0;
    ALL = 0;
    let options = {menstrual_health: MH, safer_sex: SS, reassigning_sexual_attitudes: RSA, all: ALL};
    fs.writeFileSync(path.resolve(__dirname, '../public/data.json'), JSON.stringify(options));
}