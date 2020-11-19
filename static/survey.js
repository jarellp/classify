console.log("Hello World");

function result() {
    let url = "/survey/";
    console.log(url);
    window.location.replace(url);
}

function setup() {
    $("#submit").click(result);
}

$(document).ready(setup);