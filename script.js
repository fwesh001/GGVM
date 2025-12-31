function nav() { 
    var realNav = document.getElementById('realnav');
    if (realNav.style.display === "none") {
        realNav.style.display = "block";
    }    else {
        realNav.style.display = "none";
    }
    
}



const currentTimeElement = document.getElementById("current-time");

function updateCurrentTime() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString();
  currentTimeElement.textContent = formattedTime;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);


// Script for modal upgrade 

const modal = document.getElementById('upgradeModal');
const stayBtn = document.getElementById('stayBtn');

// 1. Check if they've seen it
if (!localStorage.getItem('ggvm_visited')) {
  modal.style.display = 'flex';
}

// 2. Close and save to memory when they click "Explore"
stayBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  localStorage.setItem('ggvm_visited', 'true');
});
