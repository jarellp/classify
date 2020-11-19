const expect = require("chai").expect;
const login = require("../static/survey.js");


describe("submit button working properly", function() {
    it("should return /survey/", function() {
        expect(survey.result()).to.equal("/survey/");
    });
});