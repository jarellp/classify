console.log("Hello world");

function signup() {
    let url = "/signup/";
    console.log(url);
    window.location.replace(url);
}

function login() {
    let url = "/success/";
    window.location.replace(url);
}

function setup() {
    $("#signup").click(webpage.registration);
    $("#login").click(webpage.submission);
    
    
}

$(document).ready(setup);