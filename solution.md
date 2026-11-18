# Solution.md — Healthcare Resource Expiry & Inventory Rescue Platform

## 1. Problem Statement

Healthcare organizations such as NGOs, clinics, hospitals, dispensaries, and community health centers handle many types of essential resources—not only medicines, but also medical equipment, surgical items, diagnostic kits, PPE kits, sanitizers, food supplies, blood-bank-related consumables, and other operational materials.

These organizations commonly face these problems:

- Medicines and medical supplies expire without timely alerts.
- Equipment and consumables are not tracked properly.
- Stock shortages occur in one organization while another organization has surplus stock.
- Manual registers and spreadsheets cause errors and poor visibility.
- There is no trusted system for organization-to-organization transfer of usable resources.
- Expired or unsafe items are sometimes not identified clearly.
- Organizations cannot measure how much wastage they have prevented.

The problem is therefore not limited to medicine expiry. It covers the complete management, expiry tracking, stock monitoring, and redistribution of all essential healthcare resources.

## 2. Proposed Solution

### 2.1 Core Idea

We propose a **Healthcare Resource Expiry & Inventory Rescue Platform** for verified healthcare organizations.

The platform will help organizations:

1. Register and log in as verified organizations.
2. Maintain digital inventory for medicines and all other healthcare resources.
3. Track expiry dates, stock quantity, storage conditions, and batch details.
4. Receive alerts before items expire or go out of stock.
5. Identify surplus, near-expiry, or unused resources.
6. Search for required resources from other verified organizations.
7. Request, approve, and track resource transfers.
8. Maintain transparent records of donations, transfers, and wastage prevented.

The platform is designed only for organizations. Individual households will not be allowed to create accounts. This keeps the system accountable, safe, and suitable for institutional use.

### 2.2 Resources Covered

The platform will support multiple categories of healthcare resources:

| Category | Examples |
|---|---|
| Medicines | Tablets, syrups, injections, ointments, vaccines |
| Medical equipment | BP monitors, thermometers, nebulizers, wheelchairs, oxygen concentrators |
| Surgical items | Gloves, syringes, bandages, sutures, catheters, surgical kits |
| Diagnostic supplies | Test kits, rapid tests, sample containers, reagents |
| PPE and safety items | Masks, PPE kits, face shields, sanitizers, disinfectants |
| Nutrition supplies | ORS, nutritional supplements, baby food, emergency food packets |
| General hospital supplies | Bedsheets, wheelchairs, first-aid kits, cleaning supplies |
| Other resources | Furniture, computers, stationery, awareness materials, logistics support |

For each resource, the organization can define whether it is:

- **Expiry-based:** Medicines, vaccines, test kits, food items.
- **Non-expiry-based:** Equipment, furniture, computers, wheelchairs.
- **Condition-based:** Equipment that needs servicing, repair, calibration, or replacement.

## 3. How the Platform Works

### 3.1 Organization Registration

1. An NGO, clinic, hospital, or healthcare organization registers on the platform.
2. It provides organization name, type, address, contact details, and registration/license information.
3. The platform admin verifies the organization.
4. After verification, the organization can add inventory and participate in resource transfers.

### 3.2 Adding Inventory

The organization adds each resource with details such as:

- Resource name
- Category
- Brand or manufacturer
- Batch or serial number
- Quantity and unit
- Purchase or donation date
- Expiry date, if applicable
- Storage condition
- Condition status
- Source of supply
- Assigned department or storage location

### 3.3 Expiry and Stock Tracking

For expiry-based resources, the system calculates the number of days remaining before expiry.

For non-expiry resources, the system tracks availability, condition, and usage status.

Resources can be classified as:

| Status | Meaning |
|---|---|
| Available | Item is usable and in stock |
| Low stock | Quantity has fallen below the minimum required level |
| Near expiry | Item will expire soon but is still usable |
| Critical expiry | Item is close to expiry and needs urgent use or transfer |
| Needs maintenance | Equipment requires repair, servicing, or calibration |
| Damaged | Item is not usable in its current condition |
| Expired | Item can no longer be used and must be removed from transfer options |

### 3.4 Alerts and Notifications

The system will generate alerts for:

- Medicines or supplies nearing expiry.
- Low-stock resources.
- Equipment requiring maintenance.
- Pending transfer requests.
- New resource availability from other organizations.

Organizations can set alert periods such as 90, 60, 30, 15, and 7 days before expiry.

### 3.5 Resource Rescue and Transfer

When an organization has surplus or near-expiry but usable resources, it can list them as **Available for Transfer**.

Another verified organization can:

1. Search for the required resource.
2. Filter by category, location, quantity, expiry window, and condition.
3. Send a transfer request.
4. Wait for approval from the donor organization.
5. Receive the resource and confirm receipt on the platform.

Every transfer is recorded with resource details, quantity, organizations involved, date, and final status.

## 4. Key Features

| Feature | Description |
|---|---|
| Organization-only access | Only verified healthcare organizations can register and use the platform. |
| Multi-category inventory | Manage medicines, equipment, surgical items, PPE, diagnostics, food, and other resources. |
| Expiry tracking | Automatically identify near-expiry and expired resources. |
| Stock monitoring | Track available quantity, minimum stock level, and low-stock alerts. |
| Equipment condition tracking | Record working, damaged, under-repair, or maintenance-required equipment. |
| Smart dashboard | Show urgent expiry items, low stock, pending requests, and transfer history. |
| Resource search | Search resources available with other verified organizations. |
| Transfer management | Send, approve, reject, and complete resource transfer requests. |
| Transfer history | Maintain a complete record of all donations and transfers. |
| Reports | Show rescued resources, expired items, stock movement, and wastage prevented. |
| Role-based access | Different permissions for admins, inventory managers, and recipients. |
| Admin verification | Platform admin verifies organizations before allowing transfers. |

## 5. User Roles

### 5.1 Organization Admin

- Registers the organization.
- Adds and manages staff users.
- Approves or rejects transfer requests.
- Views reports and audit records.
- Controls organization-level settings.

### 5.2 Inventory Manager

- Adds and updates resources.
- Records expiry dates, quantities, and storage details.
- Marks resources as available for transfer.
- Handles low-stock and maintenance alerts.

### 5.3 Recipient Organization

- Searches for available resources.
- Sends transfer requests.
- Receives approved resources.
- Confirms receipt in the system.

### 5.4 Platform Admin

- Verifies organizations.
- Monitors platform activity.
- Handles disputes or suspicious activity.
- Views system-wide impact reports.

## 6. System Workflow

```text
Organization Registration
          |
          v
Admin Verification
          |
          v
Resource Inventory Entry
          |
          v
Expiry / Stock / Condition Tracking
          |
          v
Alert Generation
          |
          v
Surplus or Near-Expiry Resource Listed
          |
          v
Recipient Organization Searches Resource
          |
          v
Transfer Request Sent
          |
          v
Donor Organization Approves / Rejects
          |
          v
Resource Transferred
          |
          v
Receipt Confirmed
          |
          v
Impact and Audit Report Updated
```

## 7. Example Use Case

A district hospital has 500 surgical masks, 200 gloves, and a batch of paracetamol tablets that will expire in 25 days.

Without the platform:

- The hospital may not notice the near-expiry medicine in time.
- A nearby NGO may be facing a shortage of the same items.
- Usable resources may expire or remain unused.

With the platform:

1. The hospital adds the items to its inventory.
2. The system marks the paracetamol batch as **Critical Expiry**.
3. The hospital lists the masks, gloves, and paracetamol as available for transfer.
4. A nearby NGO searches for these resources.
5. The NGO sends a transfer request.
6. The hospital approves the request.
7. The NGO receives the resources and confirms receipt.
8. The platform records that usable resources were rescued instead of wasted.

## 8. Technical Solution

### 8.1 Technology Stack

The website will be built using simple and widely supported web technologies:

| Layer | Technology |
|---|---|
| Frontend | HTML5 |
| Styling | CSS3 |
| Interactivity | JavaScript |
| Data storage for prototype | Browser LocalStorage |
| Optional backend later | Firebase, Supabase, Node.js, or PHP |
| Hosting | GitHub Pages, Netlify, or Vercel |

For the initial working prototype, the website can be built completely using **HTML, CSS, and JavaScript**. JavaScript will handle login simulation, inventory management, expiry calculations, alerts, search, transfer requests, and dashboard updates.

### 8.2 Website Pages

| Page | Purpose |
|---|---|
| Home / Landing Page | Explains the platform, its purpose, and benefits |
| Login Page | Organization login |
| Registration Page | New organization registration |
| Dashboard | Summary of inventory, alerts, transfers, and reports |
| Inventory Page | Add, view, edit, search, and delete resources |
| Expiry Alerts Page | Shows near-expiry, critical, and expired resources |
| Low Stock Page | Shows resources below minimum stock level |
| Equipment Page | Tracks equipment condition and maintenance needs |
| Available Resources Page | Shows resources listed for transfer |
| Transfer Requests Page | Manage incoming and outgoing transfer requests |
| Transfer History Page | Shows completed transfers and donations |
| Reports Page | Displays wastage prevented and resource utilization |
| Admin Verification Page | Allows admin to verify organizations |
| Profile / Settings Page | Manage organization details and alert preferences |

### 8.3 Frontend Structure

```text
project-folder/
│
├── index.html               # Landing page
├── login.html               # Organization login
├── register.html            # Organization registration
├── dashboard.html           # Main dashboard
├── inventory.html           # Inventory management
├── expiry-alerts.html       # Expiry alerts
├── low-stock.html           # Low-stock resources
├── equipment.html           # Equipment condition tracking
├── transfers.html           # Transfer requests
├── transfer-history.html    # Completed transfers
├── reports.html             # Reports and impact
├── admin.html               # Admin verification panel
│
├── css/
│   └── style.css            # Global styling
│
├── js/
│   ├── auth.js              # Login and registration logic
│   ├── inventory.js         # Add, edit, delete, search inventory
│   ├── expiry.js            # Expiry calculation and alerts
│   ├── transfers.js         # Transfer request logic
│   ├── dashboard.js         # Dashboard updates
│   └── storage.js           # LocalStorage helper functions
│
└── assets/
    ├── images/
    └── icons/
```

### 8.4 Data Storage Using LocalStorage

For the prototype, JavaScript can store data in the browser using `localStorage`.

Example data structure:

```json
{
  "organizations": [
    {
      "id": "ORG001",
      "name": "City Care Hospital",
      "type": "Hospital",
      "email": "admin@citycare.org",
      "password": "hashed_password",
      "address": "Mumbai",
      "status": "Verified"
    }
  ],
  "inventory": [
    {
      "id": "INV001",
      "orgId": "ORG001",
      "name": "Paracetamol 500mg",
      "category": "Medicine",
      "batchNumber": "PCM-2026-01",
      "quantity": 200,
      "unit": "tablets",
      "expiryDate": "2026-11-25",
      "storage": "Cool and dry place",
      "status": "Critical Expiry"
    },
    {
      "id": "INV002",
      "orgId": "ORG001",
      "name": "Digital BP Monitor",
      "category": "Equipment",
      "serialNumber": "BPM-8891",
      "quantity": 2,
      "condition": "Working",
      "status": "Available"
    }
  ],
  "transferRequests": [
    {
      "id": "TRF001",
      "donorOrgId": "ORG001",
      "recipientOrgId": "ORG002",
      "inventoryId": "INV001",
      "quantity": 100,
      "status": "Pending"
    }
  ]
}
```

### 8.5 JavaScript Functionality

| Module | JavaScript Responsibility |
|---|---|
| Authentication | Register organization, login, logout, and role handling |
| Inventory | Add, update, delete, and search resources |
| Expiry calculation | Compare current date with expiry date |
| Alerts | Show near-expiry, critical, expired, and low-stock items |
| Dashboard | Display counts, charts, recent alerts, and pending requests |
| Transfers | Create, approve, reject, and complete transfer requests |
| Search | Filter resources by name, category, location, and status |
| Reports | Calculate rescued items, expired items, and transfer statistics |
| LocalStorage | Save and retrieve data in the browser |

### 8.6 Expiry Calculation Logic

JavaScript can calculate remaining days using:

```javascript
function getDaysRemaining(expiryDate) {
  const today = new Date();
  const expiry = new Date(expiryDate);

  const differenceInTime = expiry.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}
```

Status can be decided as:

```javascript
function getResourceStatus(daysRemaining) {
  if (daysRemaining <= 0) return "Expired";
  if (daysRemaining <= 30) return "Critical Expiry";
  if (daysRemaining <= 90) return "Near Expiry";
  return "Safe";
}
```

## 9. Uniqueness

### 9.1 What Makes This Solution Different

Most existing systems focus only on medicine stock or hospital inventory. This platform combines **expiry tracking, multi-resource inventory management, and organization-to-organization rescue transfers** in one system.

| Existing Approach | Our Solution |
|---|---|
| Manual registers or Excel sheets | Digital, searchable, and automated inventory |
| Only medicine tracking | Medicines plus equipment, PPE, diagnostics, food, and general supplies |
| Expiry noticed too late | Early expiry alerts and critical-expiry dashboard |
| Wastage after expiry | Resources are identified before expiry for reuse or transfer |
| No coordination between organizations | Verified organization-to-organization transfer network |
| Household donation platforms | Institution-only platform with accountability |
| No transfer proof | Complete digital transfer and audit history |
| Generic inventory software | Focused on expiry rescue, shortage reduction, and resource redistribution |

### 9.2 Unique Value Proposition

**“Do not let usable medicines, equipment, or supplies expire or remain unused in one organization while another organization needs them.”**

The platform converts unused, surplus, and near-expiry resources into a rescue opportunity for verified healthcare organizations.

### 9.3 Innovation Points

- **Multi-resource support:** Handles medicines as well as equipment, surgical items, PPE, diagnostics, and other supplies.
- **Expiry-first design:** Expiry tracking is a central feature, not an optional extra.
- **Rescue window:** Resources are flagged early enough to be used or transferred safely.
- **Condition-based equipment tracking:** Equipment is tracked by working condition, repair status, and usability.
- **Trust layer:** Only verified organizations can participate in transfers.
- **Batch and serial tracking:** Medicines are tracked by batch number; equipment can be tracked by serial number.
- **Impact measurement:** The platform can show how many resources were saved from expiry or transferred successfully.
- **Simple technology:** The prototype can be built using only HTML, CSS, and JavaScript, making it easy to demonstrate and deploy.

## 10. Social Impact

- Reduces wastage of medicines and medical supplies.
- Helps resource-limited clinics, NGOs, and rural health centers access needed items.
- Improves transparency in healthcare inventory management.
- Encourages reuse and redistribution of usable resources.
- Reduces shortage-related delays in patient care.
- Creates measurable records of resources rescued rather than wasted.
- Strengthens cooperation among hospitals, NGOs, clinics, and community health centers.

## 11. Feasibility

The solution is feasible because:

- It can start as a simple HTML, CSS, and JavaScript website.
- LocalStorage is sufficient for a college-level prototype or hackathon demo.
- The workflow is based on practical inventory activities that organizations already perform.
- The platform can later be upgraded with a real database and backend without changing the core idea.
- The system can begin with a small network of local NGOs, clinics, and hospitals.

## 12. Challenges and Mitigation

| Challenge | Mitigation |
|---|---|
| Fake organization registration | Admin verification and registration-document checks |
| Unsafe transfer of medicines | Only non-expired, properly stored, and eligible items can be transferred |
| Expired item misuse | Expired resources are automatically blocked from transfer |
| Data entry burden | Simple forms, category-based entry, and bulk upload in future versions |
| Low participation initially | Start with partner NGOs, clinics, and hospital pharmacies |
| Data loss in LocalStorage | Use export/backup option; upgrade to a real database later |
| Privacy concerns | Store only necessary organizational and inventory data |

## 13. Future Enhancements

- Real login system with database and secure password storage.
- Cloud database using Firebase, Supabase, or MySQL.
- SMS, email, and WhatsApp alerts.
- Map-based search for nearby organizations.
- QR-code or barcode-based resource tracking.
- AI-based demand prediction and shortage alerts.
- Multi-language support.
- Mobile app version.
- Government or health-department dashboard for district-level insights.
- Integration with hospital pharmacy and procurement systems.

## 14. Expected Outcome

The platform will help healthcare organizations:

- Detect near-expiry medicines and supplies early.
- Track all types of healthcare resources in one place.
- Reduce avoidable wastage.
- Transfer usable surplus resources to organizations in need.
- Maintain transparent inventory and transfer records.
- Build a collaborative healthcare resource-sharing network.

## 15. Conclusion

This solution expands the idea beyond medicine expiry to the complete management and rescue of healthcare resources. By combining expiry tracking, stock monitoring, equipment condition tracking, smart alerts, and verified organization-to-organization transfers, the platform ensures that usable medicines, equipment, and supplies reach organizations that need them before they are wasted.

The use of HTML, CSS, and JavaScript makes the solution simple to build, easy to demonstrate, and suitable for a working prototype.
