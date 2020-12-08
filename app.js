var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("textarea");
var outputDiv = document.querySelector("#output");

function clickHandler(){
    outputDiv.innerText = "text translated : " + textArea.value;
};

btnTranslate.addEventListener("click",clickHandler);
