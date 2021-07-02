const h1 = document.querySelector(".hello h1");

function handelTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass){
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handelTitleClick);
