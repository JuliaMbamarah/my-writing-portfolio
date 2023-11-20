function navigate(section) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  section.classList.add("active");

  console.log(`Navigating to ${section.textContent}`);
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    navigate(this);
  });
});
