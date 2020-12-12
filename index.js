const globby = require("globby");
const loadJsonFile = require("load-json-file");
const writeJsonFile = require("write-json-file");

module.exports = async function collateJson(inputs, output) {
    const paths = await globby(inputs);
    const objects = await Promise.all(paths.map(path => loadJsonFile(path)));
    await writeJsonFile(output, objects, {indent: 4});
};

