// ----- Navigation Toggle -----
document.addEventListener("DOMContentLoaded", () => {
  const sidemenu = document.getElementById("sidemenu");
  const openmenu = document.getElementById("openmenu");
  const closemenu = document.getElementById("closemenu");

  if (openmenu && sidemenu) {
    openmenu.addEventListener("click", () => {
      sidemenu.style.right = "0";
    });
  }

  if (closemenu && sidemenu) {
    closemenu.addEventListener("click", () => {
      sidemenu.style.right = "-200px";
    });
  }
});

document.addEventListener("click", function (e) {
  const sidemenu = document.getElementById("sidemenu");
  const openBtn = document.getElementById("openmenu");

  if (sidemenu && sidemenu.style.right === "0px") {
    if (!sidemenu.contains(e.target) && !openBtn.contains(e.target)) {
      sidemenu.style.right = "-200px";
    }
  }
});

// ----- Tab Switcher -----
function opentab(event, tabname) {
  const tablinks = document.getElementsByClassName("tab-links");
  const tabcontents = document.getElementsByClassName("tab-contents");

  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ----- Form Anim + Status Feedback -----
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const button = document.getElementById("submitButton");

  if (form && button) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      button.classList.add("loading");
      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          button.classList.remove("loading");
          if (response.ok) {
            button.classList.add("success");
          } else {
            button.classList.add("error");
          }

          setTimeout(() => {
            button.classList.remove("success", "error");
            button.innerHTML = '<span class="btn-text">Submit</span>';
            form.reset();
          }, 1800);
        })
        .catch(() => {
          button.classList.remove("loading");
          button.classList.add("error");
          setTimeout(() => {
            button.classList.remove("error");
            button.innerHTML = '<span class="btn-text">Submit</span>';
          }, 1800);
        });
    });
  }
});

// ----- Smooth Scroll -----
const scrollBtn = document.querySelector(".scroll-down-btn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  });
}

// ----- Back to Top -----
window.onload = function () {
  const topBtn = document.querySelector(".back-to-top");
  if (topBtn) {
    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};

// ----- GLightbox -----
if (typeof GLightbox !== "undefined") {
  const lightbox = GLightbox({ selector: ".glightbox" });
}
