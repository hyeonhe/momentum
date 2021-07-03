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
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);