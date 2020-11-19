const cucumber = require("cucumber");
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;

const expect = require("chai").expect;

const login = require("../static/page.js");

Given("user clicks survey button", function() {

});

let action;

When("the survey function is called in script/page.js", function() {
    action = page.survey();
})

Then("the url will become .../page/", function() {
    expect(action).to.equal("/page/");
});