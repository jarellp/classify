console.log("Hello World");

function survey() {
    let url = "/page/";
    console.log(url);
    window.location.replace(url);
}

function setup() {
    $("#submit").click(survey);
}

$(document).ready(setup);