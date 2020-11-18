console.log("Hello world");

function signup() {
    let url = "/signup/";
    console.log(url);
    window.location.replace(url);
}

function login() {
<<<<<<< HEAD
    let url = "/login/";
    console.log(url);
=======
    let url = "/success/";
>>>>>>> 93c2ac14e0e2e5247426c132fe55c7cf44709015
    window.location.replace(url);
}

function setup() {
<<<<<<< HEAD
    $("#signup").click(signup);
    $("#login").click(login);
=======
    $("#signup").click(webpage.registration);
    $("#login").click(webpage.submission);
    
    
>>>>>>> 93c2ac14e0e2e5247426c132fe55c7cf44709015
}

$(document).ready(setup);