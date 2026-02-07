const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators (short and stable)
        this.usernameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']");
        this.loginButton = page.locator("button[type='submit']");
        this.loginTitle = page.getByRole("heading", { name: "Login" });
    }

    async open() {
        await this.page.goto("/");
        await expect(this.loginTitle).toBeVisible({ timeout: 10000 });
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };
