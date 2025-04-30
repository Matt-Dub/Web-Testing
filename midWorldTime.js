

const midWorldMonths = [
    "Snowbirth", "Thawsend", "Rainsinger", "Bloomtide",
    "Sowingdeep", "Highsun", "Burning Moon", "Dustfall",
    "Twilighting", "Falling Veil", "Ashend", "Longnight"
  ];

function setMidWorldTheme() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear()-1472;
    const detailsWrapper = document.getElementById(".details__wrapper");
    const dateWrapper = document.querySelector("#date");
  
    dateWrapper.innerHTML = "Gilead, " + day + " " + midWorldMonths[month] + " " + year + "Y.E.";

    /*
    if (hour >= 5 && hour < 12) {
      detailsWrapper.className = ".dawn";
      
    } else if (hour >= 12 && hour < 18) {
      detailsWrapper.className = ".midday";
    } else if (hour >= 18 && hour < 21) {
      detailsWrapper.className = ".dusk";
    } else {
      detailsWrapper.className = ".night"; // Demon Moon time!
    }
      */
  }
  
  // Run the function when the page loads
  window.onload = setMidWorldTheme;