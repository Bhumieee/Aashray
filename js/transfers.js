document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".table-panel button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      if (!row) return;
      const transferId = row.querySelector("td strong")?.textContent;
      const requests = AashrayStorage.get("transferRequests", []);
      const match = requests.find((request) => request.id === transferId);
      if (match && button.textContent.trim() === "Review") {
        match.status = "Approved";
        AashrayStorage.set("transferRequests", requests);
      }
      alert(`Transfer ${transferId || "request"} is ready for review.`);
    });
  });
});
