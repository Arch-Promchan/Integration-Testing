// test/unit/hexToRgb.test.js
const { expect } = require("chai");
const hexToRgb = require("../../src/hexToRgb");

describe("hexToRgb (unit tests)", () => {
  it("converts #ffffff to {255,255,255}", () => {
    expect(hexToRgb("#ffffff")).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it("converts ffa500 (no #) to orange", () => {
    expect(hexToRgb("ffa500")).to.deep.equal({ r: 255, g: 165, b: 0 });
  });

  it("converts shorthand #0f8 to expanded", () => {
    expect(hexToRgb("#0f8")).to.deep.equal({ r: 0, g: 255, b: 136 });
  });

  it("throws for invalid hex length", () => {
    expect(() => hexToRgb("abcd")).to.throw("Invalid hex color");
  });

  it("throws for non-hex characters", () => {
    expect(() => hexToRgb("#zzzzzz")).to.throw("Invalid hex color");
  });
});
