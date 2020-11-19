const expect = require("chai").expect;
const login = require("../static/registration.js");


describe("submit button working properly", function() {
    it("should return /submit/", function() {
        expect(registration.send()).to.equal("/signup/");
    });
});