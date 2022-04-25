// first step is to target id and classes.

// shortcut created using arrow function to avoid code repetation. 
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

// second step is to add event listener submit to our form.

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // calling the master function
    master(username, 0, "Username can't be blank");
    master(email, 1, "Email can't be blank");
    master(password, 2, "Password can't be blank");

});

// this is the main function for displaying error and success message
let master = (id, serial, message) => {
    if(id.value.trim() === ''){   // The trim() method removes whitespace from both sides of a string.
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";  // to see the failureIcon opacity is put at 1.
    }
    else{
        errorMsg[serial].innerHTML = '';
        successIcon[serial].style.opacity = "1"; // here also to see the successIcon opacity is put at 1.
        failureIcon[serial].style.opacity = "0"; // to hide the failureIcon opacity is set to 0.
    }

}