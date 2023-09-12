import test, { Page, Locator, expect } from "@playwright/test";

export class WidgetsPage {
    readonly page: Page; 
    readonly tooltipOption: Locator;
    readonly progressBarOption: Locator;
    readonly tooltipTitle: Locator;

    constructor (page: Page) {
        this.page = page;
        this.tooltipOption = page.getByText('Tool Tips');
        this.progressBarOption = page.getByText('Progress Bar');
        this.tooltipTitle = page.locator('div.main-header');
    }

    async navigateToTooltipsSubpage() {
        await this.tooltipOption.click();
        await this.page.waitForLoadState('domcontentloaded');
        expect(this.tooltipTitle).toContainText('Tool Tips');
    }

    async navigateToProgressBarSubpage() {
        this.progressBarOption.click();
        await this.page.waitForLoadState('domcontentloaded');
        expect(this.progressBarOption).toContainText('Progress Bar');
    }
}
