const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links") as HTMLDivElement;
  navLinks.classList.toggle("expanded");
});

export {};
