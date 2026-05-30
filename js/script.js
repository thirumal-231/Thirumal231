// --- Navigation & Header Selectors ---
const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

// --- Mobile Mobile Menu Toggle ---
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

// --- Page Transition / Active State Reset ---
const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// --- Navbar Click Handlers ---
navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");

      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
    }
  });
});

// --- Logo Click Handler (Redirects to Home/About) ---
logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();
    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

// --- Resume Sub-Tab Navigation ---
const resumeBtns = document.querySelectorAll(".resume-btn");
resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

// --- Portfolio Carousel Navigation ---
const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");
const portfolioDetails = document.querySelectorAll(".portfolio-detail");

let index = 0;
// Dynamically compute the boundary (e.g., index 4 for 5 projects)
const maxIndex = portfolioDetails.length - 1;

const activePortfolio = () => {
  console.log("Current Portfolio Index:", index);
  const imgSlide = document.querySelector(".portfolio-carousal .img-slide");

  // Calculates the sliding translation while preserving your rem-based column gaps
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  // Sync up the text description matching the current active index
  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

// Slider Right Control
arrowRight.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    arrowLeft.classList.remove("disabled");
  }

  if (index === maxIndex) {
    arrowRight.classList.add("disabled");
  }

  activePortfolio();
});

// Slider Left Control
arrowLeft.addEventListener("click", () => {
  if (index > 0) {
    index--;
    arrowRight.classList.remove("disabled");
  }

  if (index === 0) {
    arrowLeft.classList.add("disabled");
  }

  activePortfolio();
});