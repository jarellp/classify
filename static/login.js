function signup() {
    let url = "/signup/";
    console.log(url);
    window.location.replace(url);
}

function login() {
    let url = "/login/";
    console.log(url);
    window.location.replace(url);
}

function setup() {
    $("#signup").click(signup);
    $("#login").click(login);
}

$(document).ready(setup);
