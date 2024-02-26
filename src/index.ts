const buttonElement = document.querySelector('.clickMe') as HTMLButtonElement;

const bodyElem :HTMLElement = document.body;

let isWhite:boolean = false;

buttonElement.addEventListener("click",():void=>{
    console.log("I am Clicked")
    if(isWhite){
        bodyElem.style.backgroundColor ="";
    } else{
        bodyElem.style.backgroundColor = "#24f072";
    }
    isWhite =!isWhite;
})




