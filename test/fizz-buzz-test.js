const assert = require("assert");
const printHelloWorld = require("../fizz-buzz")


describe("fizz-buzz1", ()=>{
  it("print hello world", ()=>{
    assert.equal(printHelloWorld(), "hello world")
  })
});