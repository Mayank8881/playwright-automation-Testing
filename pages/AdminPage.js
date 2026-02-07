const { expect } = require("@playwright/test");

class AdminPage {
    constructor(page) {
        this.page = page;

        // Left menu Admin tab
        this.adminTab = page.getByRole("link", { name: "Admin" });

        // Breadcrumb headings (stable)
        this.breadcrumbAdmin = page.getByRole("heading", { name: "Admin" });
        this.breadcrumbUserManagement = page.getByRole("heading", {
            name: "/ User Management",
        });

        // Search section label (stable and visible on Admin page)
        this.systemUsersHeading = page.getByRole("heading", { name: "System Users" });

        // Table header
        this.tableHeader = page.locator(".oxd-table-header");

        // Table header cells with specific column names
        this.usernameHeader = page.getByRole("columnheader", { name: /username/i });
        this.userRoleHeader = page.getByRole("columnheader", { name: /user role/i });
    }

    async openAdmin() {
        await this.adminTab.click();
        await expect(this.page).toHaveURL(/admin/);
    }

    async assertAdminPageLoaded() {
        // Assertion 1: breadcrumb heading visible
        await expect(this.breadcrumbAdmin).toBeVisible();
        await expect(this.breadcrumbUserManagement).toBeVisible();

        // Assertion 2: "System Users" heading visible
        await expect(this.systemUsersHeading).toBeVisible();

        // Assertion 3: table header visible with specific column text
        await expect(this.tableHeader).toBeVisible();
        await expect(this.usernameHeader).toBeVisible();
        await expect(this.userRoleHeader).toBeVisible();
    }
}

module.exports = { AdminPage };
