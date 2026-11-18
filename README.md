# Aashray

Aashray is a static prototype for a healthcare resource expiry and inventory rescue platform. It helps hospitals, NGOs, clinics, community health centers, and other verified organizations track resources and transfer usable surplus items instead of allowing them to expire or remain unused.

## Features

- Organization registration and login simulation
- Multi-category inventory management
- Expiry and low-stock alerts
- Equipment condition and maintenance tracking
- Incoming and outgoing transfer requests
- Transfer history and audit records
- Organization verification for platform administrators
- Dashboard metrics and rescue impact reports
- Browser-based data storage with LocalStorage

## Technology

- HTML5
- CSS3
- JavaScript
- Browser LocalStorage

No backend or database is required for the prototype.

## Project Structure

```text
.
├── README.md
├── solution.md
├── html/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── inventory.html
│   ├── expiry-alerts.html
│   ├── low-stock.html
│   ├── equipment.html
│   ├── transfers.html
│   ├── transfer-history.html
│   ├── reports.html
│   └── admin.html
├── css/
│   └── style.css
├── js/
│   ├── auth.js
│   ├── inventory.js
│   ├── expiry.js
│   ├── transfers.js
│   ├── dashboard.js
│   └── storage.js
└── assets/
    ├── images/
    └── icons/
```

## Run Locally

From the project directory, start a local static server:

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/html/index.html` in a browser.

## Prototype Accounts

The login and registration screens are demonstrations:

- Organization: `admin@citycare.org`
- Password: `aashray123`
- The registered organization is shown as pending verification until an admin verifies it.

## Pages

| Page | Purpose |
|---|---|
| `html/index.html` | Landing page |
| `html/login.html` | Organization login |
| `html/register.html` | Organization registration |
| `html/dashboard.html` | Inventory, alert, and transfer summary |
| `html/inventory.html` | Inventory management |
| `html/expiry-alerts.html` | Expiry status and rescue alerts |
| `html/low-stock.html` | Low-stock resources |
| `html/equipment.html` | Equipment condition tracking |
| `html/transfers.html` | Transfer request management |
| `html/transfer-history.html` | Completed transfer records |
| `html/reports.html` | Impact and utilization reports |
| `html/admin.html` | Organization verification |

## LocalStorage

The JavaScript modules store prototype data under the following keys:

- `aashray.organizations`
- `aashray.inventory`
- `aashray.transferRequests`
- `aashray.currentUser`
- `aashray.alertPreferences`

Data can be cleared through browser developer tools with:

```javascript
localStorage.clear();
```
