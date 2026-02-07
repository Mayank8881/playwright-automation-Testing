const { expect } = require("@playwright/test");

class DashboardPage {
    constructor(page) {
        this.page = page;

        this.dashboardHeading = page.locator("h6:has-text('Dashboard')");
        this.profileIcon = page.locator(".oxd-userdropdown-tab");
    }

    async assertLoginSuccessful() {
        // Assertion options:
        // 1) Dashboard heading visible
        await expect(this.dashboardHeading).toBeVisible();

        // 2) URL contains dashboard
        await expect(this.page).toHaveURL(/dashboard/);

        // 3) Profile icon visible
        await expect(this.profileIcon).toBeVisible();
    }
}

module.exports = { DashboardPage };
