const { getMethod, postMethod, putMethod } = require("../apiServer/apiObjects");

describe("Testing API restful", function () {
    it("Test Get function", async function () {
    getMethod();
    });

    it("Test Post function", async function () {
        postMethod();
        });

    it("Test Put function", async function () {
        putMethod();
        });
})