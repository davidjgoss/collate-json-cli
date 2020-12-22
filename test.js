const test = require("ava");
const collateJson = require(".")
const loadJsonFile = require("load-json-file");

test("should save array of input file contents to output file", async t => {
    await collateJson("test-data/*.json", "test-result.json");
    const result = await loadJsonFile("test-result.json");
    t.deepEqual(result, [
        {name: "Tom"},
        {name: "Dick"},
        {name: "Bob"},
        {name: "Harry"}
    ]);
});
