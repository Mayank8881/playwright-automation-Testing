const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
    testDir: "./tests",
    timeout: 60 * 1000,

    use: {
        headless: true, // change to false if you want to see execution
        viewport: { width: 1366, height: 768 },
        actionTimeout: 15000,
        slowMo: 2000,

        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure",

        baseURL: "https://opensource-demo.orangehrmlive.com/",
    },

    reporter: [["html", { open: "never" }], ["list"]],
});
