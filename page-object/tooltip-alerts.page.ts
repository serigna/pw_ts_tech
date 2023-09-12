import test, { Page, Locator, expect } from "@playwright/test";

export class TooltipWidgetsPage {
    readonly page: Page; 
    readonly tooltipOption: Locator;
    readonly tooltipTitle: Locator;
    readonly hoverButton: Locator;
    readonly hoverButtonText: Locator;

    constructor (page: Page) {
        this.page = page;
        this.tooltipOption = page.getByText('Tool Tips');
        this.tooltipTitle = page.locator('div.main-header');
        this.hoverButton = page.getByRole('button', { name: 'Hover me to see' });
        this.hoverButtonText = page.getByText('You hovered over the Button');
    }

    async navigateToTooltipsSubpage() {
        await this.tooltipOption.click();
        await this.page.waitForLoadState();
        expect(this.tooltipTitle).toContainText('Tool Tips')
    }

    async clickOnTheHoverButton() {
        await this.hoverButton.click({delay: 2000});
    }

    async verifyTheTextIsVisible() {
        expect(this.hoverButtonText).toBeVisible()
    }
}