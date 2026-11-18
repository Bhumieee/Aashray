document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".auth-form[action='dashboard.html']");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = loginForm.querySelector("input[type='email']").value.trim();
      const password = loginForm.querySelector("input[type='password']").value;
      if (!email || !password) return;

      AashrayStorage.set("currentUser", {
        name: "City Care Hospital",
        email,
        role: "Organization Admin",
        status: "Verified"
      });
      window.location.href = "dashboard.html";
    });
  }

  const registerForm = document.querySelector(".auth-form[action='login.html']");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const fields = registerForm.querySelectorAll("input, select");
      const organizations = AashrayStorage.get("organizations", []);
      organizations.push({
        id: `ORG${String(Date.now()).slice(-6)}`,
        name: fields[0].value.trim(),
        type: fields[1].value,
        email: fields[2].value.trim(),
        phone: fields[3].value.trim(),
        registrationNumber: fields[4].value.trim(),
        address: fields[5].value.trim(),
        status: "Pending"
      });
      AashrayStorage.set("organizations", organizations);
      window.location.href = "login.html";
    });
  }
});
