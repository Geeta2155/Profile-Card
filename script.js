const profileImage = document.getElementById("profileImage");
const moreInfo = document.getElementById("moreInfo");

profileImage.addEventListener("click", () => {
  if (moreInfo.style.opacity === "1") {
    moreInfo.style.opacity = "0";
    moreInfo.style.transform = "translateY(10px)";
    setTimeout(() => {
      moreInfo.style.display = "none"; // Hide after animation
    }, 300); // Matches the transition time
  } else {
    moreInfo.style.display = "block"; // Show the element
    setTimeout(() => {
      moreInfo.style.opacity = "1";
      moreInfo.style.transform = "translateY(0)";
    }, 10); // Small delay to allow the element to be displayed before animation starts
  }
});
