var tabS3Act = document.querySelector('#tabSec3 li:last-child button');
var tabS3 = new bootstrap.Tab(tabS3Act);

tabS3.show();

document.addEventListener("scroll", () => {
  (document.querySelector("div.custom-container-hero").getBoundingClientRect().top + document.querySelector("div.custom-container-hero").getBoundingClientRect().height <= 0) ? document.querySelector("div.bg-gradient-nav").classList.add("bg-off-hero") : document.querySelector("div.bg-gradient-nav").classList.remove("bg-off-hero");
});

document.querySelector(".navbar-toggler").addEventListener("mouseup", () => {
  (document.querySelector("div.bg-gradient-nav div#navbarToggleExternalContent").classList.contains("show")) ? document.querySelector("div.bg-gradient-nav").classList.remove("bg-menu-active") : (!document.querySelector("div.bg-gradient-nav div#navbarToggleExternalContent").classList.contains("show") && !document.querySelector("div.bg-gradient-nav div#navbarToggleExternalContent").classList.contains("collapsing")) ? document.querySelector("div.bg-gradient-nav").classList.add("bg-menu-active") : "";
});

window.addEventListener("resize", () => {
  if (document.querySelector("html").getBoundingClientRect().width >= 1024) {
    document.querySelector("div.bg-gradient-nav").classList.remove("bg-menu-active");
    document.querySelector("div.bg-gradient-nav div#navbarToggleExternalContent").classList.remove("show");
  }
});
 