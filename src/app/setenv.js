const fs = require("fs");
const environmentFilePath = "./src/environments/environment.prod.ts";
const envFile = fs.readFileSync(environmentFilePath, "utf8");
const newEnvFile = envFile.replace(
  "process.env.NEXTECH_TOKEN || ''",
  `'${process.env.NEXTECH_TOKEN}'`
);
fs.writeFileSync(environmentFilePath, newEnvFile, "utf8");
