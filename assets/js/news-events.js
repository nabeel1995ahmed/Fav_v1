(() => {
  const filterButtons = document.querySelectorAll(".ne-filter-btn");
  const categoryItems = document.querySelectorAll("[data-ne-category]");
  const emptyState = document.getElementById("ne-empty-state");

  if (!filterButtons.length) return;

  const applyFilter = (filter) => {
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.filter === filter;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    let visibleCount = 0;

    categoryItems.forEach((item) => {
      const category = item.dataset.neCategory;
      const show = filter === "all" || category === filter;
      item.classList.toggle("ne-hidden", !show);
      if (show) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.classList.toggle("d-none", visibleCount > 0);
    }
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });
})();
