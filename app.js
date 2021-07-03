// // const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//     console.log("clicksdfsad");
// }

// loginButton.addEventListener("click", onLoginBtnClick);

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name");
    // } else if(username.length > 15){
    //     alert("Your name is too long.");
    // } else{

    // }
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);