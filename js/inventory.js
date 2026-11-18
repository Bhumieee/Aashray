document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector(".search-field input");
  const category = document.querySelector(".toolbar select");
  const status = document.querySelectorAll(".toolbar select")[1];
  const rows = document.querySelectorAll("tbody tr");
  if (!rows.length) return;

  function filterInventory() {
    const searchText = search ? search.value.toLowerCase() : "";
    const categoryText = category ? category.value.toLowerCase() : "all categories";
    const statusText = status ? status.value.toLowerCase() : "all statuses";

    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const matchesSearch = !searchText || text.includes(searchText);
      const matchesCategory = categoryText === "all categories" || text.includes(categoryText.replace("surgical items", "surgical items"));
      const matchesStatus = statusText === "all statuses" || text.includes(statusText);
      row.hidden = !(matchesSearch && matchesCategory && matchesStatus);
    });
  }

  if (search) search.addEventListener("input", filterInventory);
  if (category) category.addEventListener("change", filterInventory);
  if (status) status.addEventListener("change", filterInventory);
});
