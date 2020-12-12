#!/usr/bin/env node

"use strict";

const meow = require("meow");
const collateJson = require(".");

(async function () {
    const cli = meow(`
	Usage
	  $ collate-json-cli <input> <output>

	Examples
	  $ foo data/*.json result.json
`, {
        flags: {}
    });
    const [inputs, output] = cli.input;
    await collateJson(inputs, output);
})();

