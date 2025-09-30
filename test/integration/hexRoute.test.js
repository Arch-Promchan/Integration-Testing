// test/integration/hexRoute.test.js
const request = require("supertest");
const { expect } = require("chai");
const app = require("../../src/app");

describe("Hex route integration tests", () => {
  before(() => {
    // runs before this suite
    // (could be used to set env or seed DB; not required here)
    // console.log("Starting integration tests...");
  });

  after(() => {
    // runs after the suite
    // console.log("Finished integration tests.");
  });

  it("GET /hex-to-rgb?hex=#ff0000 returns rgb for red", async () => {
    const res = await request(app).get("/hex-to-rgb").query({ hex: "#ff0000" }).expect(200);
    expect(res.body).to.deep.equal({ r: 255, g: 0, b: 0 });
  });

  it("POST /hex-to-rgb with JSON returns rgb", async () => {
    const res = await request(app).post("/hex-to-rgb").send({ hex: "#00ff00" }).expect(200);
    expect(res.body).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it("GET returns 400 for missing param", async () => {
    await request(app).get("/hex-to-rgb").expect(400);
  });

  it("GET returns 400 for invalid hex (zero-division style invalid input)", async () => {
    const res = await request(app).get("/hex-to-rgb").query({ hex: "zzz" }).expect(400);
    expect(res.body).to.have.property("error");
  });
});
