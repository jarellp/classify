const cucumber = require("cucumber");
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;

const expect = require("chai").expect;

const login = require("../static/survey.js");

Given("user clicks result button", function() {

});

let action;

When("the result is called in script/survvey.js", function() {
    action = survey.result();
});

Then("the url will become .../survey/", function() {
    expect(action).to.equal("/survey/");
});