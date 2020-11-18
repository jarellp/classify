console.log("Hello World");

function send() {
    let url = "/submit/";
    console.log(url);
    window.location.replace(url);
}

function handle() {
    send();
}

function setup() {
    $("#submit").click(handle);
}

$(document).ready(setup);