function showMessage() {

    alert("Welcome to my interactive responsive website!");

}

function sendMessage() {

    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    if (name === "" || message === "") {

        alert("Please fill all fields");
        return;

    }

    alert("Thank you " + name + "! Your message has been sent.");

    document.getElementById("name").value = "";
    document.getElementById("message").value = "";

}
