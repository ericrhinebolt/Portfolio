///////////////////////////////////////////////////////////
// Make mobile navigation work

// const btnNavEl = document.querySelector(".btn-mobile-nav");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
//   headerEl.classList.toggle("nav-open");
// });

///////////////////////////////////////////////////////////
// Slide in pages

const logoLink = document.querySelector(".logo-link");
const aboLink = document.querySelector(".abo-link");
const expLink = document.querySelector(".exp-link");
const eduLink = document.querySelector(".edu-link");
const proLink = document.querySelector(".pro-link");
const conLink = document.querySelector(".con-link");
const dowLink = document.querySelector(".dow-link");
const secPage = document.querySelector(".secondary");

function replaceClasses(newClass) {
  const classNames = [
    "edu-open",
    "pro-open",
    "con-open",
    "dow-open",
    "exp-open",
    "abo-open",
  ];
  classNames.forEach((value, index) => {
    if (secPage.classList.contains(value)) {
      secPage.classList.replace(value, newClass);
    } else {
      secPage.classList.add(newClass);
    }
  });
}

logoLink.addEventListener("click", function () {
  if (secPage.classList.contains("exp-open")) {
    secPage.classList.remove("exp-open");
  } else if (secPage.classList.contains("edu-open")) {
    secPage.classList.remove("edu-open");
  } else if (secPage.classList.contains("pro-open")) {
    secPage.classList.remove("pro-open");
  } else if (secPage.classList.contains("con-open")) {
    secPage.classList.remove("con-open");
  } else if (secPage.classList.contains("dow-open")) {
    secPage.classList.remove("dow-open");
  } else if (secPage.classList.contains("abo-open")) {
    secPage.classList.remove("abo-open");
  }
});

aboLink.addEventListener("click", function () {
  replaceClasses("abo-open");
});

expLink.addEventListener("click", function () {
  replaceClasses("exp-open");
});

eduLink.addEventListener("click", function () {
  replaceClasses("edu-open");
});

proLink.addEventListener("click", function () {
  replaceClasses("pro-open");
});

dowLink.addEventListener("click", function () {
  replaceClasses("dow-open");
});

conLink.addEventListener("click", function () {
  replaceClasses("con-open");
});

///////////////////////////////////////////////////////////
// Hidden Details

// const detailHide = document.querySelector(".hide");
// const expList = document.querySelectorAll(".list").forEach((list) => {
//   list.addEventListener("mouseenter", (event) => {
//     event.target.nextElementSibling.classList.remove("hide");
//   });
//   list.addEventListener("mouseout", (event) => {
//     event.target.nextElementSibling.classList.add("hide");
//   });
// });

///////////////////////////////////////////////////////////
//Popup Details

const expList2 = document.querySelectorAll(".list1").forEach((list1) => {
  list1.addEventListener("mouseenter", (event) => {
    event.target.nextElementSibling?.classList.add("show");
    event.target.firstElementChild?.classList.add("show");
  });
  list1.addEventListener("mouseout", (event) => {
    event.target.nextElementSibling?.classList.remove("show");
    event.target.firstElementChild?.classList.remove("show");
  });
});

///////////////////////////////////////////////////////////

// Smooth scrolling animation

// const allLinks = document.querySelectorAll("a:link");
// console.log(allLinks);

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

//     // Scroll back to top
//     if (href === "#")
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });

//     // Scroll to other links
//     if (href !== "#" && href.startsWith("#")) {
//       const sectionEl = document.querySelector(href);
//       sectionEl.scrollIntoView({ behavior: "smooth" });
//     }

//     // Close mobile nav
//     if (link.classList.contains("main-nav-link"))
//       headerEl.classList.toggle("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Sticky navigation

// const sectionHeroEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
