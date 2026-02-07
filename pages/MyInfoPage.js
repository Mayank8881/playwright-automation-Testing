const { expect } = require("@playwright/test");

class MyInfoPage {
    constructor(page) {
        this.page = page;

        // My Info tab in left menu
        this.myInfoTab = page.getByRole("link", { name: "My Info" });

        // Most stable header inside My Info page
        this.personalDetailsHeader = page.getByRole("heading", {
            name: "Personal Details",
        });

        // Another stable section header
        this.attachmentsHeader = page.getByRole("heading", { name: "Attachments" });
    }

    async openMyInfo() {
        await this.myInfoTab.click();

        // URL check (optional but safe)
        await expect(this.page).toHaveURL(/viewPersonalDetails/);
    }

    async assertMyInfoLoaded() {
        // Assertion 1: Personal Details visible
        await expect(this.personalDetailsHeader).toBeVisible();

        // Assertion 2: Attachments visible (extra strong validation)
        await expect(this.attachmentsHeader).toBeVisible();
    }
}

module.exports = { MyInfoPage };
