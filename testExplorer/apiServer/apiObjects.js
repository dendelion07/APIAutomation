const request = require("supertest")
const { expect } = require("chai");
const baseUrl = require("../globalVariable/baseUrl");

async function getMethod() {
    const response = await request(url).get("objects?id=3&id=5&id=10");

    expect(response.status).to.equal(200);
    console.log(response);
}

async function postMethod() {
    const response = await request(url).post("objects/10").send(
        {
            name: "Apple iPad Mini 5th Gen",
            data:
            {
                Capacity: "64 GB",
                Screensize : 7.9
            }
        });

    expect(response.status).to.equal(200);
    console.log(response);
}

async function putMethod() {
    const response = await request(url).put("objects/5").send(
        {
            name: "Meilani Angouw",
            data:
            {
                price : 200000,
                color : pink
            }
        });

    expect(response.status).to.equal(200);
    console.log(response);
}

module.exports = { getMethod, postMethod, putMethod }