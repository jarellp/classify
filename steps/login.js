const cucumber = require("cucumber");
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;

const expect = require("chai").expect;

const login = require("../static/login.js");

Given("user clicks signup button", function() {

});

let action;

When("the signup function is called in script/login.js", function() {
    action = login.signup();
});

Then("the url will become .../signup/", function() {
    expect(action).to.equal("/signup/");
});