function nav() {
  var realNav = document.getElementById('realnav');
  if (realNav.style.display === "none") {
    realNav.style.display = "block";
  } else {
    realNav.style.display = "none";
  }

}



document.addEventListener('DOMContentLoaded', () => {
  const currentTimeElement = document.getElementById("current-time");

  function updateCurrentTime() {
    if (!currentTimeElement) return;
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString();
    currentTimeElement.textContent = formattedTime;
  }

  updateCurrentTime();
  if (currentTimeElement) setInterval(updateCurrentTime, 1000);

  // Script for modal upgrade
  const modal = document.getElementById('upgradeModal');
  const stayBtn = document.getElementById('stayBtn');

  if (modal) {
    // Show the modal every time the page loads
    modal.style.display = 'flex';

    // Handle the "Stay/Explore" button to just hide the modal
    if (stayBtn) {
      stayBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
  }
});
