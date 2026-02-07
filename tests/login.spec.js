const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/loginPage");
const { DashboardPage } = require("../pages/DashboardPage");
const { credentials } = require("../utils/testData");

test.describe("OrangeHRM Login Test", () => {
    test("Login should be successful", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        // Step 1: Open application
        await loginPage.open();

        // Step 2: Login
        await loginPage.login(credentials.username, credentials.password);

        // Step 3: Assertion after login
        await dashboardPage.assertLoginSuccessful();
    });
});
