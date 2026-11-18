function getDaysRemaining(expiryDate) {
  const today = new Date();
  const expiry = new Date(expiryDate);
  return Math.ceil((expiry.getTime() - today.getTime()) / 86400000);
}

function getResourceStatus(daysRemaining) {
  if (daysRemaining <= 0) return "Expired";
  if (daysRemaining <= 30) return "Critical Expiry";
  if (daysRemaining <= 90) return "Near Expiry";
  return "Safe";
}

document.addEventListener("DOMContentLoaded", () => {
  const inventory = AashrayStorage.get("inventory", []);
  document.querySelectorAll("[data-expiry-date]").forEach((element) => {
    const days = getDaysRemaining(element.dataset.expiryDate);
    element.textContent = `${days} days`;
    element.dataset.status = getResourceStatus(days);
  });
  console.log("Aashray expiry records:", inventory);
});
