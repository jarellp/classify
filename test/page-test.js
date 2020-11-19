const expect = require("chai").expect;
const login = require("../static/page.js");


describe("submit button working properly", function() {
    it("should return /page/", function() {
        expect(page.survey()).to.equal("/page/");
    });
});