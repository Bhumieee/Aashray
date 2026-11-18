document.addEventListener("DOMContentLoaded", () => {
  const inventory = AashrayStorage.get("inventory", []);
  const requests = AashrayStorage.get("transferRequests", []);
  const pending = requests.filter((request) => request.status === "Pending").length;
  const pendingCards = document.querySelectorAll(".stat-card");
  if (pendingCards[3]) {
    const count = pendingCards[3].querySelector("strong");
    if (count) count.textContent = String(pending);
  }
  console.log(`Aashray dashboard: ${inventory.length} seeded inventory records, ${pending} pending requests`);
});
