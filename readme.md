# OrangeHRM UI Automation using Playwright

## 📌 Project Overview
This project automates the OrangeHRM demo website using Playwright (JavaScript).  
It covers the complete login flow and performs dashboard actions after login with proper assertions, explicit waits, and clean reusable page object structure.

Demo Site :
https://opensource-demo.orangehrmlive.com/

Demo Video :
https://drive.google.com/file/d/1MGsTZOPBPW0cdnIQqz1WWDKhsoN7iprv/view?usp=sharing

---

## 🧰 Tools and Language Used
- **Language:** JavaScript (Node.js)
- **Automation Tool:** Playwright Test Runner
- **Reporting:** Playwright HTML Report
- **Extras Enabled:**
  - Screenshot on failure
  - Video on failure
  - Trace on failure

---

## 📂 Project Structure

```

playwright-automation/
│
├── tests/
│   ├── login.spec.js
│   ├── dashboardActions.spec.js
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── AdminPage.js
│   ├── MyInfoPage.js
│   ├── PimAddEmployeePage.js
│
├── utils/
│   ├── testData.js
│
├── playwright.config.js
├── package.json
├── README.md
└── .gitignore

````

### Folder Explanation
- **tests/** → Contains all test specs
- **pages/** → Page Object classes (locators + reusable methods)
- **utils/** → Test data (credentials)
- **playwright.config.js** → Playwright configuration (reporting, screenshots, etc.)

---

## ✅ Scenarios Automated

### 1. Login Automation
Steps:
- Launch browser
- Open OrangeHRM demo website
- Enter username and password
- Click Login button
- Assert login success by verifying:
  - Dashboard heading is visible
  - URL contains "dashboard"
  - Profile dropdown icon is visible

Test File:
- `tests/login.spec.js`

---

### 2. Dashboard Actions After Login (2 Actions)

#### ✅ Action 1: Admin Tab Verification
Steps:
- Click on **Admin** tab
- Assert that:
  - "System Users" heading is visible
  - Table header is visible

Page Object:
- `pages/AdminPage.js`

---

#### ✅ Action 2: PIM → Add Employee
Steps:
- Navigate to **PIM → Add Employee**
- Enter First Name and Last Name
- Click Save
- Assert employee creation by verifying:
  - Personal Details page heading is visible

Page Object:
- `pages/PimAddEmployeePage.js`

---

#### ✅ Action 3: My Info Page Verification

Steps:
-Click on My Info tab
-Assert that:
    "Personal Details" section header is visible

Page Object:
- `pages/MyInfoPage.js`

---

Test File:
- `tests/dashboardActions.spec.js`

---

## ⚙️ Installation & Setup

### 1. Install Node.js
Ensure Node.js is installed:
```bash
node -v
npm -v
````

### 2. Install Dependencies

```bash
npm install
```
### 3. Install Playwright

```bash
npm install -D @playwright/test
```

### 4. Install Playwright Browsers

```bash
npx playwright install
```

---

## ▶️ Steps to Run the Automation

### Run all tests (default headless mode)

```bash
npx playwright test
```

### Run tests in headed mode (see browser execution)

```bash
npx playwright test --headed
```

### Run tests in debug mode

```bash
npx playwright test --debug
```

---

## 📊 Test Report

After execution, open the HTML report using:

```bash
npx playwright show-report
```

---

## 🏆 Bonus Features Implemented

* Screenshot capture on failure
* HTML report generation

---

## 🔐 Test Credentials Used

* Username: **Admin**
* Password: **admin123**

---

## 👨‍💻 Author

Mayank Mokhere
