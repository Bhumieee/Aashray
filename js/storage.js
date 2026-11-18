const AashrayStorage = (() => {
  const KEYS = {
    organizations: "aashray.organizations",
    inventory: "aashray.inventory",
    transferRequests: "aashray.transferRequests",
    currentUser: "aashray.currentUser",
    alertPreferences: "aashray.alertPreferences"
  };

  function get(key, fallback = []) {
    try {
      const value = localStorage.getItem(KEYS[key]);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      console.error(`Unable to read ${key} from LocalStorage`, error);
      return fallback;
    }
  }

  function set(key, value) {
    try {
      localStorage.setItem(KEYS[key], JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Unable to save ${key} to LocalStorage`, error);
      return false;
    }
  }

  function remove(key) {
    localStorage.removeItem(KEYS[key]);
  }

  function seed() {
    if (!get("organizations", null)) {
      set("organizations", [{
        id: "ORG001",
        name: "City Care Hospital",
        type: "Hospital",
        email: "admin@citycare.org",
        address: "Mumbai",
        status: "Verified"
      }]);
    }

    if (!get("inventory", null)) {
      set("inventory", [
        { id: "INV001", name: "Paracetamol 500mg", category: "Medicine", batchNumber: "PCM-2026-01", quantity: 200, unit: "tablets", expiryDate: "2026-11-25", status: "Critical Expiry" },
        { id: "INV002", name: "Digital BP Monitor", category: "Equipment", serialNumber: "BPM-8891", quantity: 2, condition: "Working", status: "Available" }
      ]);
    }

    if (!get("transferRequests", null)) {
      set("transferRequests", [
        { id: "TRF001", donorOrgId: "ORG001", recipientOrgId: "ORG002", inventoryId: "INV001", quantity: 100, status: "Pending" }
      ]);
    }
  }

  return { KEYS, get, set, remove, seed };
})();

AashrayStorage.seed();
