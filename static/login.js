function signup() {
    let url = "/signup/";
    console.log(url);
    window.location.replace(url);
}

function setup() {
    $("#signup").click(signup);
}

$(document).ready(setup);
