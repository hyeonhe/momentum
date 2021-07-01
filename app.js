const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleh1Click(){
    console.log("h1 was clicked!");
}

function handleMouseEnter(){
    console.log("mouse is here");
}

function handleMouseLeave(){
    console.log("mouse was leaved");
}

function handleWindowResize(){
    document.body.style.background = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

// h1.onclick = handleh1Click;
h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
