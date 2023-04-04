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

// target
fs.writeFileSync("node.json", JSON.stringify(nodes, null, 4));

// html file
const tableStart = `<table border="1" bordercolor="black" width="100%" cellspacing="0" cellpadding="5">
    <tr>
        <td>Node ID</td>
        <td>图片</td>
        <td>name_en</td>
        <td>name_cn</td>
        <td>aliases</td>
        <td>website</td>
        <td>twitter</td>
    </tr>`;
const tableEnd = `</table>`;
let tableFiles = "";
let group = "";
nodes.forEach((element) => {
	if (element.node_id.toString().slice(0, 4) !== group) {
		group = element.node_id.toString().slice(0, 4);
		tableFiles === "" ? void 0 : (tableFiles += tableEnd);
		tableFiles += `<h2>✅ ${element.name_cn} ${group}</h2>\n`;
		tableFiles += tableStart;
	}
	tableFiles += `
    <tr>
        <td>${element.node_id}</td>
        <td>${element.img_url ? "存在" : "-"}</td>
        <td>${element.name_en}</td>
        <td>${element.name_cn}</td>
        <td>${element.aliases}</td>
        <td>${element.website}</td>
        <td>${element.twitter}</td>
    </tr>`;
});

const targetFile = `
# Node List

`;
fs.writeFileSync("node.md", tableFiles);
