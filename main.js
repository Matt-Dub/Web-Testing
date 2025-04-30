var mainButton = document.querySelector(".main-button");

mainButton.addEventListener("click", changeTitle);

function changeTitle(){
    document.querySelector(".page-h1").innerHTML = "Enter the Dark Tower";
}