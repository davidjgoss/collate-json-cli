const globby = require("globby");
const loadJsonFile = require("load-json-file");
const writeJsonFile = require("write-json-file");
const {isArray} = require("lodash");

module.exports = async function collateJson(inputs, output) {
    const paths = await globby(inputs);
    const sourceArrays = await Promise.all(paths.map(async path => {
        const rawContent = await loadJsonFile(path);
        return isArray(rawContent) ? rawContent : [rawContent];
    }));
    await writeJsonFile(output, [].concat(...sourceArrays), {indent: 4});
};

