//footer def
const regionButton = document.getElementById("region");
const regionMenu = document.getElementById("region-menu");
const languageButton = document.getElementById("language");
const languageMenu = document.getElementById("language-menu");
const chevronRegion = document.getElementById("chevron-region");
const chevronLanguage = document.getElementById("chevron-language");
const joinNowBtn = document.getElementById("footer-join-now-btn");
const moreInfoFooterBtn = document.getElementById("footer-herramientas-btn");

//nav fnc
document.addEventListener("DOMContentLoaded", function () {
  const hamburguerButton = document.getElementById("hamburguer-button");
  const hamburguerMenu = document.getElementById("hamburguer-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const closeIcon = document.querySelector(".close-icon");

  function toggleMenu() {
    hamburguerMenu.classList.toggle("hamburguer-visible");
    menuOverlay.classList.toggle("menu-overlay-visible");
    document.body.classList.toggle("no-scroll");
  }

  hamburguerButton.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (event) {
    if (
      !hamburguerMenu.contains(event.target) &&
      event.target !== hamburguerButton
    ) {
      hamburguerMenu.classList.remove("hamburguer-visible");
      menuOverlay.classList.remove("menu-overlay-visible");
      document.body.classList.remove("no-scroll");
    }
  });

  closeIcon.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hamburguerMenu.classList.remove("hamburguer-visible");
      menuOverlay.classList.remove("menu-overlay-visible");
      document.body.classList.remove("no-scroll");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = [
      { button: 'header-games-btn', menu: 'header-games-menu', visibleClass: 'games-visible', chevron: 'chevron-games' },
      { button: 'header-experiences-btn', menu: 'header-experiences-menu', visibleClass: 'experiences-visible', chevron: 'chevron-experiences' },
      { button: 'header-about-btn', menu: 'header-about-menu', visibleClass: 'about-visible', chevron: 'chevron-about' },
      { button: 'header-commitments-btn', menu: 'header-commitments-menu', visibleClass: 'commitments-visible', chevron: 'chevron-commitments' },
      { button: 'header-resources-btn', menu: 'header-resources-menu', visibleClass: 'resources-visible', chevron: 'chevron-resources' }
    ];
  
    dropdowns.forEach(({ button, menu, visibleClass, chevron }) => {
      const buttonElement = document.getElementById(button);
      const menuElement = document.getElementById(menu);
      const chevronElement = document.getElementById(chevron);
  
      let timeout;
  
      const showMenu = () => {
        clearTimeout(timeout);
        menuElement.classList.add(visibleClass);
        chevronElement.classList.remove('fa-chevron-down');
        chevronElement.classList.add('fa-chevron-up');
      };
  
      const hideMenu = () => {
        timeout = setTimeout(() => {
          menuElement.classList.remove(visibleClass);
          chevronElement.classList.remove('fa-chevron-up');
          chevronElement.classList.add('fa-chevron-down');
        }, 200); 
      };
  
      buttonElement.addEventListener('mouseenter', showMenu);
      buttonElement.addEventListener('mouseleave', hideMenu);
      menuElement.addEventListener('mouseenter', showMenu);
      menuElement.addEventListener('mouseleave', hideMenu);
    });
  });

// Cards
const newsButton = document.getElementById("ea-news-button");
const newsVisibilitySection = document.getElementById("news-section");

const eaSportsButton = document.getElementById("ea-sports-button");
const eaSportsVisibilitySection = document.getElementById("ea-sports-section");

const starWarsButton = document.getElementById("star-wars-button");
const starWarsVisibilitySection = document.getElementById("star-wars-section");

const apexLegendsButton = document.getElementById("apex-legends-button");
const apexVisibilitySection = document.getElementById("apex-section");

const simsButton = document.getElementById("los-sims-button");
const simsVisibilitySection = document.getElementById("los-sims-section");

const f1Button = document.getElementById("f1-button");
const f1VisibilitySection = document.getElementById("f1-section");

const battlefieldButton = document.getElementById("battlefield-button");
const battlefieldVisibilitySection = document.getElementById(
  "battlefield-section"
);

const footerPosition = document.getElementById("footer-id");

function newsButtonVisibility() {
  if (newsVisibilitySection.className === "ea-home-updates-cards-hidden") {
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-hidden",
      "ea-home-updates-cards-visible"
    );
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-visible",
      "ea-sports-fc-menu-hidden"
    );
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-visible",
      "star-wars-cards-menu-hidden"
    );
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-visible",
      "apex-legends-cards-menu-hidden"
    );
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-visible",
      "los-sims-cards-menu-hidden"
    );
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-visible",
      "f1-cards-menu-hidden"
    );
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-visible",
      "battlefield-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-position", "footer-regular");
  }
  if (newsVisibilitySection.className === "ea-home-updates-cards-visible") {
    regionMenu.style.bottom = "-316vh";
    languageMenu.style.bottom = "-316vh";
  }
}
function sportsButtonVisibility() {
  if (eaSportsVisibilitySection.className === "ea-sports-fc-menu-hidden") {
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-hidden",
      "ea-sports-fc-menu-visible"
    );
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-visible",
      "ea-home-updates-cards-hidden"
    );
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-visible",
      "star-wars-cards-menu-hidden"
    );
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-visible",
      "apex-legends-cards-menu-hidden"
    );
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-visible",
      "los-sims-cards-menu-hidden"
    );
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-visible",
      "battlefield-cards-menu-hidden"
    );
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-visible",
      "f1-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-regular", "footer-position");
    if (eaSportsVisibilitySection.className === "ea-sports-fc-menu-visible") {
      regionMenu.style.bottom = "-410vh";
      languageMenu.style.bottom = "-410vh";
    }
  }
}
function starWarsButtonVisibility() {
  if (starWarsVisibilitySection.className === "star-wars-cards-menu-hidden") {
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-hidden",
      "star-wars-cards-menu-visible"
    );
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-visible",
      "ea-sports-fc-menu-hidden"
    );
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-visible",
      "ea-home-updates-cards-hidden"
    );
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-visible",
      "apex-legends-cards-menu-hidden"
    );
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-visible",
      "los-sims-cards-menu-hidden"
    );
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-visible",
      "battlefield-cards-menu-hidden"
    );
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-visible",
      "f1-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-position", "footer-regular");
  }
  if (starWarsVisibilitySection.className === "star-wars-cards-menu-visible") {
    regionMenu.style.bottom = "-284vh";
    languageMenu.style.bottom = "-284vh";
  }
}
function apexButtonVisibility() {
  if (apexVisibilitySection.className === "apex-legends-cards-menu-hidden") {
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-hidden",
      "apex-legends-cards-menu-visible"
    );
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-visible",
      "ea-sports-fc-menu-hidden"
    );
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-visible",
      "star-wars-cards-menu-hidden"
    );
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-visible",
      "ea-home-updates-cards-hidden"
    );
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-visible",
      "los-sims-cards-menu-hidden"
    );
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-visible",
      "battlefield-cards-menu-hidden"
    );
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-visible",
      "f1-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-position", "footer-regular");
  }

  if (apexVisibilitySection.className === "apex-legends-cards-menu-visible") {
    regionMenu.style.bottom = "-316vh";
    languageMenu.style.bottom = "-316vh";
  }
}
function simsVisibilityButton() {
  if (simsVisibilitySection.className === "los-sims-cards-menu-hidden") {
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-hidden",
      "los-sims-cards-menu-visible"
    );
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-visible",
      "ea-sports-fc-menu-hidden"
    );
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-visible",
      "star-wars-cards-menu-hidden"
    );
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-visible",
      "ea-home-updates-cards-hidden"
    );
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-visible",
      "apex-legends-cards-menu-hidden"
    );
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-visible",
      "f1-cards-menu-hidden"
    );
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-visible",
      "battlefield-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-position", "footer-regular");
  }
  if (simsVisibilitySection.className === "los-sims-cards-menu-visible") {
    regionMenu.style.bottom = "-316vh";
    languageMenu.style.bottom = "-316vh";
  }
}
function f1VisibilityButton() {
  if (f1VisibilitySection.className === "f1-cards-menu-hidden") {
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-hidden",
      "f1-cards-menu-visible"
    );
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-visible",
      "ea-sports-fc-menu-hidden"
    );
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-visible",
      "star-wars-cards-menu-hidden"
    );
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-visible",
      "ea-home-updates-cards-hidden"
    );
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-visible",
      "apex-legends-cards-menu-hidden"
    );
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-visible",
      "los-sims-cards-menu-hidden"
    );
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-visible",
      "battlefield-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-position", "footer-regular");
  }

  if (f1VisibilitySection.className === "f1-cards-menu-visible") {
    regionMenu.style.bottom = "-316vh";
    languageMenu.style.bottom = "-316vh";
  }
}
function battlefieldButtonVisibility() {
  if (
    battlefieldVisibilitySection.className === "battlefield-cards-menu-hidden"
  ) {
    battlefieldVisibilitySection.classList.replace(
      "battlefield-cards-menu-hidden",
      "battlefield-cards-menu-visible"
    );
    eaSportsVisibilitySection.classList.replace(
      "ea-sports-fc-menu-visible",
      "ea-sports-fc-menu-hidden"
    );
    starWarsVisibilitySection.classList.replace(
      "star-wars-cards-menu-visible",
      "star-wars-cards-menu-hidden"
    );
    newsVisibilitySection.classList.replace(
      "ea-home-updates-cards-visible",
      "ea-home-updates-cards-hidden"
    );
    apexVisibilitySection.classList.replace(
      "apex-legends-cards-menu-visible",
      "apex-legends-cards-menu-hidden"
    );
    simsVisibilitySection.classList.replace(
      "los-sims-cards-menu-visible",
      "los-sims-cards-menu-hidden"
    );
    f1VisibilitySection.classList.replace(
      "f1-cards-menu-visible",
      "f1-cards-menu-hidden"
    );
    footerPosition.classList.replace("footer-position", "footer-regular");
  }

  if (battlefieldVisibilitySection.className === "battlefield-cards-menu-visible") {
    regionMenu.style.bottom = "-316vh";
    languageMenu.style.bottom = "-316vh";
  }
}
newsButton.addEventListener("click", newsButtonVisibility);
eaSportsButton.addEventListener("click", sportsButtonVisibility);
starWarsButton.addEventListener("click", starWarsButtonVisibility);
apexLegendsButton.addEventListener("click", apexButtonVisibility);
simsButton.addEventListener("click", simsVisibilityButton);
f1Button.addEventListener("click", f1VisibilityButton);
battlefieldButton.addEventListener("click", battlefieldButtonVisibility);

//footer fnc
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
function fixMenuBtns() {}
function goToEaPlay() {
  window.open("ea-play/index.html");
}

function goToHerramientas() {
  window.open("/ea-herramientas/index.html");
}
regionButton.addEventListener("click", showRegionClass);
regionButton.addEventListener("click", changeRegionChevron);

languageButton.addEventListener("click", showLanguageClass);
languageButton.addEventListener("click", changeLanguageChevron);

joinNowBtn.addEventListener("click", goToEaPlay);
moreInfoFooterBtn.addEventListener("click", goToHerramientas);
