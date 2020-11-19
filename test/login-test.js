const expect = require("chai").expect;
const login = require("../static/login.js");


describe("signup button working properly", function() {
    it("should return /signup/", function() {
        expect(login.signup()).to.equal("/signup/");
    });
    
    it("should return /login/", function() {
        expect(login.login()).to.equal("/login/");
    })
});