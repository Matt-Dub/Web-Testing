var mainButton = document.querySelector(".main-button");

mainButton.addEventListener("click", changeTitle);

function changeTitle(){
    document.querySelector(".page-h1").innerHTML = "Enter the Dark Tower";
}

function setMidWorldTheme() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const detailsWrapper = document.getElementById(".details__wrapper");
    const dateWrapper = document.querySelector(".details__main-block").firstChild();
  
    if (hour >= 5 && hour < 12) {
      detailsWrapper.className = "dawn";
      dateWrapper.innerHTML = "Gilead," + day + " " + month + " " + year + " - 3 pages - 29 sections."
    } else if (hour >= 12 && hour < 18) {
      detailsWrapper.className = "midday";
    } else if (hour >= 18 && hour < 21) {
      detailsWrapper.className = "dusk";
    } else {
      detailsWrapper.className = "night"; // Demon Moon time!
    }
  }
  
  // Run the function when the page loads
  window.onload = setMidWorldTheme;
  