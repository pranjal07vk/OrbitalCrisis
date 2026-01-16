const introVideo = document.getElementById("intro-video");
const introContainer = document.getElementById("intro-container");
const landingPage = document.getElementById("landing-page");

//INTRO VDO ANIMATION
introVideo.addEventListener("ended", () => {

introContainer.style.display = "none";
landingPage.classList.remove("hidden");
landingPage.classList.add("landing-fade-in");
//landingPage.classList.add("pixel-reveal");
});
