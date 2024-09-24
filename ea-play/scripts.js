//navbar

document.addEventListener("DOMContentLoaded", function() {
  const botonJuegos = document.getElementById("header-games-btn");
  const menuJuegos = document.getElementById("header-games-menu");
  const chevronGames = document.getElementById("chevron-games");
  let timeoutId;


  function mostrarMenu() {
      menuJuegos.classList.add("games-visible");
      chevronGames.classList.remove("fa-chevron-down");
      chevronGames.classList.add("fa-chevron-up");
  }


  function ocultarMenu() {
      menuJuegos.classList.remove("games-visible");
      chevronGames.classList.remove("fa-chevron-up");
      chevronGames.classList.add("fa-chevron-down");
  }

  botonJuegos.addEventListener("mouseover", function() {
      clearTimeout(timeoutId);
      mostrarMenu();
  });


  botonJuegos.addEventListener("mouseout", function() {
      timeoutId = setTimeout(ocultarMenu, 200);
  });

  menuJuegos.addEventListener("mouseover", function() {
      clearTimeout(timeoutId);
      mostrarMenu();
  });

  menuJuegos.addEventListener("mouseout", function() {
      timeoutId = setTimeout(ocultarMenu, 200);
  });
});


//recompensas def
const cardsPosition = document.getElementById("recompensas-card-div");
const slideLeftBtn = document.getElementById("slide-left");
const slideRightBtn = document.getElementById("slide-right");
const sliderBar = document.getElementById("slider-progress-bar");
const sliderContainer = document.getElementById("slider-progress");

// footer def
const eaLogoBtn = document.getElementById("ea-logo");
const eaLogoFooterBtn = document.getElementById("ea-logo-footer");
const regionButton = document.getElementById("region");
const regionMenu = document.getElementById("region-menu");
const languageButton = document.getElementById("language");
const languageMenu = document.getElementById("language-menu");
const chevronRegion = document.getElementById("chevron-region");
const chevronLanguage = document.getElementById("chevron-language");

//recompensas fnc
function seeMoreCards() {
  if (cardsPosition.className == "recompensas-animation rec-first-position") {
    cardsPosition.classList.replace(
      "rec-first-position",
      "rec-second-position"
    );
    sliderContainer.style.justifyContent = "center";
    slideLeftBtn.classList.replace("slide-disabled", "slide-enabled");
  } else if (
    cardsPosition.className == "recompensas-animation rec-second-position"
  ) {
    cardsPosition.classList.replace(
      "rec-second-position",
      "rec-third-position"
    );
    sliderContainer.style.justifyContent = "flex-end";
    slideRightBtn.classList.replace("slide-enabled", "slide-disabled");
  }
}

function seeLessCards() {
  if (cardsPosition.className == "recompensas-animation rec-second-position") {
    cardsPosition.classList.replace(
      "rec-second-position",
      "rec-first-position"
    );
    sliderContainer.style.justifyContent = "flex-start";
    slideLeftBtn.classList.replace("slide-enabled", "slide-disabled");
  } else if (
    cardsPosition.className == "recompensas-animation rec-third-position"
  ) {
    cardsPosition.classList.replace(
      "rec-third-position",
      "rec-second-position"
    );
    sliderContainer.style.justifyContent = "center";
    slideRightBtn.classList.replace("slide-disabled", "slide-enabled");
  }
}

slideRightBtn.addEventListener("click", seeMoreCards);
slideLeftBtn.addEventListener("click", seeLessCards);


//countries menu

document.getElementById("countries-btn").addEventListener("click", function() {
  const menu = document.getElementById("countries-menu");
  const chevron = document.getElementById("chevron-countries");

  if (menu.classList.contains("countries-hidden")) {
      menu.classList.remove("countries-hidden");
      menu.classList.add("countries-visible");
      chevron.classList.remove("fa-chevron-down");
      chevron.classList.add("fa-chevron-up");
  } else {
      menu.classList.remove("countries-visible");
      menu.classList.add("countries-hidden");
      chevron.classList.remove("fa-chevron-up");
      chevron.classList.add("fa-chevron-down");
  }
});


//footer fnc
function returnHome() {
  window.open("../index.html");
}
function showRegionClass() {
  regionMenu.classList.toggle("region-visible");
}
function changeRegionChevron() {
  if (chevronRegion.className === "fa-solid fa-chevron-down") {
    chevronRegion.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else if (chevronRegion.className === "fa-solid fa-chevron-up") {
    chevronRegion.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

function showLanguageClass() {
  languageMenu.classList.toggle("language-visible");
}
function changeLanguageChevron() {
  if (chevronLanguage.className === "fa-solid fa-chevron-down") {
    chevronLanguage.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else if (chevronLanguage.className === "fa-solid fa-chevron-up") {
    chevronLanguage.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}
regionButton.addEventListener("click", showRegionClass);
regionButton.addEventListener("click", changeRegionChevron);

languageButton.addEventListener("click", showLanguageClass);
languageButton.addEventListener("click", changeLanguageChevron);
eaLogoBtn.addEventListener("click", returnHome);
eaLogoFooterBtn.addEventListener("click", returnHome);
