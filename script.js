/* =========================================================
   SNEHA RUTH PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const header = document.getElementById("header");

const menuBtn = document.getElementById("menuBtn");

const navigation = document.getElementById("navigation");

const scrollTopBtn = document.getElementById("scrollTopBtn");

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

const yearElement = document.getElementById("year");


/* =========================================================
   CURRENT YEAR
========================================================= */

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuBtn && navigation) {

  menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navigation.classList.toggle("active");

  });


  /* Close menu after clicking link */

  const navLinks = navigation.querySelectorAll("a");

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      menuBtn.classList.remove("active");

      navigation.classList.remove("active");

    });

  });

}


/* =========================================================
   STICKY HEADER
========================================================= */

function handleHeader() {

  if (window.scrollY > 50) {

    header.classList.add("sticky");

  } else {

    header.classList.remove("sticky");

  }

}


window.addEventListener("scroll", handleHeader);


/* =========================================================
   SCROLL TO TOP
========================================================= */

function handleScrollTop() {

  if (window.scrollY > 500) {

    scrollTopBtn.classList.add("active");

  } else {

    scrollTopBtn.classList.remove("active");

  }

}


window.addEventListener("scroll", handleScrollTop);


if (scrollTopBtn) {

  scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });

  });

}


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(

  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

      }

    });

  },

  {

    threshold: 0.12

  }

);


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");

const navItems = document.querySelectorAll(".navigation a");


function updateActiveNavigation() {

  let currentSection = "";

  const scrollPosition =
    window.scrollY + window.innerHeight * 0.3;


  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {

      currentSection = section.getAttribute("id");

    }

  });


  navItems.forEach((link) => {

    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === `#${currentSection}`) {

      link.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  updateActiveNavigation
);


/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const subject =
      document.getElementById("subject").value.trim();

    const message =
      document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

      formMessage.textContent =
        "Please fill in all fields.";

      return;

    }


    /*
      This opens the user's email application.

      Change the email address here if needed.
    */

    const mailtoURL =
      `mailto:ruthsneha57@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `${message}`
      )}`;


    window.location.href = mailtoURL;


    formMessage.textContent =
      "Opening your email application...";


    contactForm.reset();

  });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (event) {

    const targetId =
      this.getAttribute("href");


    if (
      !targetId ||
      targetId === "#"
    ) {

      return;

    }


    const target =
      document.querySelector(targetId);


    if (target) {

      event.preventDefault();


      const headerHeight =
        header ? header.offsetHeight : 0;


      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;


      window.scrollTo({

        top: targetPosition,

        behavior: "smooth"

      });

    }

  });

});


/* =========================================================
   HERO IMAGE PARALLAX
========================================================= */

const heroImage =
  document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

  if (!heroImage) {

    return;

  }


  const scrollValue =
    window.scrollY;


  if (scrollValue < window.innerHeight) {

    heroImage.style.transform =
      `translateY(${scrollValue * 0.08}px)`;

  }

});


/* =========================================================
   PROJECT IMAGE LOADING
========================================================= */

const projectImages =
  document.querySelectorAll(".project-image img");


projectImages.forEach((image) => {

  image.addEventListener("load", () => {

    image.classList.add("loaded");

  });


  image.addEventListener("error", () => {

    image.style.background = "#dddddd";

  });

});


/* =========================================================
   PAGE LOADED
========================================================= */

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

  handleHeader();

  handleScrollTop();

  updateActiveNavigation();

});