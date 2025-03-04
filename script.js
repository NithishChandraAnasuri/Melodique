document.addEventListener("DOMContentLoaded", function () {
  const heartIcon = document.querySelector(".heart");

  heartIcon.addEventListener("click", function () {
    this.classList.toggle("liked"); // Toggle liked effect
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let cursorDot = document.createElement("div");
  cursorDot.classList.add("cursor-dot");
  document.body.appendChild(cursorDot);

  document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
  });
});

// -----------------------------
setTimeout(() => {
  document.querySelector(".fade-overlay").classList.add("active"); // Start fade-out
  setTimeout(() => {
    window.location.href = "Home.html"; // Redirect after fade-out
  }, 2000); // Wait for fade effect to complete (2 seconds)
}, 4000);

// ---------------------------
document.addEventListener("DOMContentLoaded", function () {
  let element = document.querySelector(".your-class"); // Update with your actual class or ID
  if (element) {
    element.classList.add("some-class");
  }
});
