const cucumber = require("cucumber");
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;

const expect = require("chai").expect;

const login = require("../static/registration.js");

Given("user clicks submit button", function() {

});

let action;

When("the send function is called in script/registration.js", function() {
    action = registration.send();
});

Then("the url will become .../submit/", function() {
    expect(action).to.equal("/submit/");
});