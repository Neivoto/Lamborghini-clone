document.addEventListener("DOMContentLoaded", function () {
  var entryElement = document.querySelector(".entry");
  var bullLogo = document.querySelector(".bull-logo");
  setTimeout(() => {
    entryElement.style.opacity = 0;
    bullLogo.style.top = "0";
    bullLogo.style.left = "40px";
    setTimeout(() => {
      entryElement.style.display = "none";
    }, 700);
    document.querySelector(".homeSlide").classList.add("home-slide-in");
    setTimeout(()=>{
      animatedFadeIntext();
      document.querySelector(".header-text2").classList.add("slide-in-text");
      document.querySelector(".slide-header-sub").classList.add("slide-in-text");
    },500)
  }, 4000);
  const fadeIn = document.querySelector(".fade-in-header");
  if (fadeIn) {
    const textContent = fadeIn.textContent;
    fadeIn.textContent = "";

    for (let i = 0; i < textContent.length; i++) {
      const letterSpan = document.createElement("span");
      letterSpan.style.fontFamily = "Snell RoundHand";
      letterSpan.style.opacity = 0;
      letterSpan.textContent = textContent[i];
      fadeIn.appendChild(letterSpan);
      letterSpan.style.animation = `fadeIn 1s ease-in-out forwards ${
        i * 250
      }ms`;
    }
  }
  function animatedFadeIntext() {
    const fadeInText = document.querySelector(".fade-in-text");
    if (fadeInText) {
      const textContent = fadeInText.textContent;
      fadeInText.textContent = "";
  
      for (let i = 0; i < textContent.length; i++) {
        const letterSpan = document.createElement("span");
        letterSpan.style.color="black";
        letterSpan.style.opacity = 0;
        letterSpan.textContent = textContent[i];
        fadeInText.appendChild(letterSpan);
        letterSpan.style.animation = `fadeIn 1s ease-in-out forwards ${i * 100}ms`;
      }
    }
    
  }

  // Audio play on click with color change
  function addAudioPlayListener(selector, audioId) {
    document.querySelector(selector).addEventListener("click", function () {
      this.classList.add("rev-color");
      setTimeout(() => {
        this.classList.remove("rev-color");
      }, 400);
      const audioElement = document.getElementById(audioId);
      if (audioElement) {
        audioElement.play();
      } else {
        console.error(`Audio element with ID ${audioId} not found!`);
      }
    });
  }

  addAudioPlayListener(".revuel", "revuelto-audio");
  addAudioPlayListener(".rev-urus", "urus-audio");
  addAudioPlayListener(".rev-hurucan", "hurucan-audio");

  document.querySelector(".models-link").addEventListener("click", () => {
    document.querySelector(".models").scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector(".dealership-link").addEventListener("click",()=>{
    document.querySelector(".dealership-sec").scrollIntoView({behavior:"smooth"});
  });
  document.querySelector(".store-link").addEventListener("click",()=>{
    document.querySelector(".lamborghini-store").scrollIntoView({behavior:"smooth"})
  })
  
  var homeImg = document.querySelector(".home-img")
  homeImg.addEventListener("click",()=>{
    homeImg.classList.add("home-img-animation");
    setTimeout(()=>{
      homeImg.classList.remove("home-img-animation")
    },1500)
  })
});
