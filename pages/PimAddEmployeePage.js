const { expect } = require("@playwright/test");

class PimAddEmployeePage {
    constructor(page) {
        this.page = page;

        // Left menu PIM
        this.pimTab = page.getByRole("link", { name: "PIM" });

        // Top menu Add Employee
        this.addEmployeeMenu = page.getByRole("link", { name: "Add Employee" });

        // Page heading
        this.addEmployeeHeading = page.getByRole("heading", { name: "Add Employee" });

        // Form fields
        this.firstNameInput = page.getByPlaceholder("First Name");
        this.lastNameInput = page.getByPlaceholder("Last Name");

        // Save button
        this.saveButton = page.getByRole("button", { name: "Save" });

        // Loader overlay that blocks clicks
        this.formLoader = page.locator(".oxd-form-loader");

        // Personal Details heading
        this.personalDetailsHeading = page.locator("h6.orangehrm-main-title", {
            hasText: "Personal Details",
        });
    }

    async openAddEmployee() {
        await this.pimTab.click();
        await expect(this.page).toHaveURL(/pim/);

        await this.addEmployeeMenu.click();
        await expect(this.addEmployeeHeading).toBeVisible();
    }

    async addEmployee(firstName, lastName) {
        // Fill first name
        await this.firstNameInput.fill(firstName);

        // Fill last name 
        await this.lastNameInput.fill(lastName);

        // Wait for any loaders to disappear
        await this.formLoader.waitFor({ state: "hidden", timeout: 15000 }).catch(() => { });

        // Scroll to save button to ensure it's in view
        await this.saveButton.scrollIntoViewIfNeeded();

        // Click Save button and wait for navigation
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: "networkidle", timeout: 30000 }),
            this.saveButton.click()
        ]);

        // Wait for form loader to clear after navigation
        await this.formLoader.waitFor({ state: "hidden", timeout: 15000 }).catch(() => { });
    }

    async assertEmployeeCreated() {
        // Wait for navigation to complete with a longer timeout
        await this.page.waitForURL(/viewPersonalDetails\/empNumber\/\d+/, { timeout: 30000 });

        // Verify the Personal Details heading is visible
        await expect(this.personalDetailsHeading).toBeVisible({ timeout: 20000 });
    }
}

module.exports = { PimAddEmployeePage };
