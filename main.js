var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel:true
});
swiper.sliderMove = function (s, e) {
    console.log(s)
    const translations = {
  en: {
    home: "Home",
    about: "About Me",
    services: "Services",
    gallery: "Gallery",
    contact: "Contact Me",
    greeting: "Hi! I'm Oscar",
    profession: "Software Engineer",
    hireMe: "Hire Me",
    contactMe: "Contact Me"
  },
  es: {
    home: "Inicio",
    about: "Sobre mí",
    services: "Servicios",
    gallery: "Galería",
    contact: "Contáctame",
    greeting: "¡Hola! Soy Oscar",
    profession: "Ingeniero de Software",
    hireMe: "Contrátame",
    contactMe: "Contáctame"
  }
};

}
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
    swiper.slideTo(indx, 1000, true)
}

  function changeLanguage(lang) {
  console.log("Idioma cambiado a:", lang); // ✅ Esto debe aparecer en la consola
  const t = translations[lang];
  
  
}


  // Navegación lateral
  document.querySelector(".Links li:nth-child(1) p").textContent = t.home;
  document.querySelector(".Links li:nth-child(2) p").textContent = t.about;
  document.querySelector(".Links li:nth-child(3) p").textContent = t.services;
  document.querySelector(".Links li:nth-child(4) p").textContent = t.gallery;
  document.querySelector(".Links li:nth-child(5) p").textContent = t.contact;

  // Sección principal: Home
  const h1 = document.querySelector(".HomeContent h1");
  if (h1) h1.textContent = t.greeting;

  const h2 = document.querySelector(".HomeContent h2");
  if (h2) h2.innerHTML = `un <span class="proffesions">${t.profession}</span>`;

  // Botones "Hire Me" y "Contactarme"
  const buttons = document.querySelectorAll(".HomeContent .buttonGroup button");
  if (buttons.length >= 2) {
    buttons[0].textContent = t.hireMe;
    buttons[1].textContent = t.contactMe;
  }
    // Actualizar el contenido de la sección "About Me" 
    const aboutMeSection = document.querySelector(".AboutMeContent");
    if (aboutMeSection) {
        const aboutMeTitle = aboutMeSection.querySelector("h1");
        if (aboutMeTitle) aboutMeTitle.textContent = t.about;

        const aboutMeText = aboutMeSection.querySelector("p");
        if (aboutMeText) aboutMeText.textContent = "Aquí va el contenido de la sección 'Sobre mí'.";
    }

