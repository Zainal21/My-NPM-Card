"use strict";

const boxen = require("boxen");
const chalk = require("chalk");

const data = {
  name: chalk.bold.cyan("           Hi, I'm Muhamad Zainal Arifin😃"),
  handle: chalk.white("@penulisduduk"),
  school: `${chalk.white("graduated from")} ${chalk
    .hex("#800000")
    .bold("SMKN 2 Karanganyar")}`,
  work: `${chalk.white("Sofware Engineer")} ${chalk.hex("#800000").bold("")}`,
  github:
    chalk.white("https://github.com/") + chalk.hex("#800000").bold("Zainal21"),
  linkedin:
    chalk.white("https://linkedin.com/in/") +
    chalk.hex("#800000").bold("muhamad-zainal-arifin"),
  instagram:
    chalk.white("https://instagram.com/") +
    chalk.hex("#800000").bold("Muhamadzain.tsx"),
  web: chalk.cyan.bold("https://muhamadzain-dev.vercel.app/"),
  npx: chalk.red("npx") + " " + chalk.white("Zainal21"),

  labelSchool: chalk.white.bold("     School:"),
  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelInstagram: chalk.white.bold("  Instagram:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    `${data.labelSchool}  ${data.school}`,
    `${data.labelWork}  ${data.work}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelInstagram}  ${data.instagram}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "green",
  }
);

function starter() {
  console.log(me);
}

starter();
