const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { DashboardPage } = require("../pages/DashBoardPage");
const { AdminPage } = require("../pages/AdminPage");
const { MyInfoPage } = require("../pages/MyInfoPage");
const { credentials } = require("../utils/testData");
const { PimAddEmployeePage } = require("../pages/PimAddEmployeePage");

test.describe("OrangeHRM Dashboard Actions", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        // Open and login before each test
        await loginPage.open();
        await loginPage.login(credentials.username, credentials.password);

        // Assert login is successful
        await dashboardPage.assertLoginSuccessful();
    });

    test("Perform Admin + My Info actions with assertions + PIM → Add Employee", async ({ page }) => {
        test.setTimeout(120000);
        const adminPage = new AdminPage(page);
        const myInfoPage = new MyInfoPage(page);
        const pimAddEmployeePage = new PimAddEmployeePage(page);

        // Action 1: PIM → Add Employee
        await pimAddEmployeePage.openAddEmployee();
        await pimAddEmployeePage.addEmployee("Mayank", "Tester");
        await pimAddEmployeePage.assertEmployeeCreated();

        // Action 2: Admin tab + assert
        await adminPage.openAdmin();
        await adminPage.assertAdminPageLoaded();

        // Action 3: My Info tab + assert
        await myInfoPage.openMyInfo();
        await myInfoPage.assertMyInfoLoaded();
    });
});
