const fs = require("fs");

const earth = require("./source/earth.json");
const edu = require("./source/edu.json");
const financial = require("./source/financial.json");
const games = require("./source/games.json");
const hardware = require("./source/hardware.json");

const jobs = require("./source/jobs.json");
const life = require("./source/life.json");
const pointless = require("./source/pointless.json");
const programming = require("./source/programming.json");
const qna = require("./source/qna.json");
const software = require("./source/software.json");

const nodes = earth.concat(edu, financial, games, hardware, jobs, life, pointless, programming, qna, software);
fs.writeFileSync("index.json", JSON.stringify(nodes, null, 4));
