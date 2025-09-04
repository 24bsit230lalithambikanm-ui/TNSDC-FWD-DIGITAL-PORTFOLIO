// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const items = document.querySelectorAll(".item");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // 🔎 Search Functionality
  searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    items.forEach(item => {
      const name = item.querySelector("h3").textContent.toLowerCase();
      const desc = item.querySelector("p").textContent.toLowerCase();

      if (name.includes(searchValue) || desc.includes(searchValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // 🍽️ Filter by Category
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      items.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});