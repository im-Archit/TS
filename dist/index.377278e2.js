const buttonElement = document.querySelector(".clickMe");
const bodyElem = document.body;
let isWhite = false;
buttonElement.addEventListener("click", ()=>{
    console.log("I am Clicked");
    if (isWhite) bodyElem.style.backgroundColor = "";
    else bodyElem.style.backgroundColor = "#24f072";
    isWhite = !isWhite;
});

//# sourceMappingURL=index.377278e2.js.map
