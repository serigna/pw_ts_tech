import test, { Page, Locator, expect } from "@playwright/test";

export class TooltipSubpage {
    readonly page: Page
    readonly hoverButton: Locator;
    readonly hoverButtonText: Locator;

    constructor (page: Page) {
        this.page = page
        this.hoverButton = page.getByRole('button', { name: 'Hover me to see' });
        this.hoverButtonText = page.getByText('You hovered over the Button');
    }

    async clickOnTheHoverButton() {
        await this.hoverButton.click({ delay: 3000 });
    }

    async verifyTheTextIsVisible() {
        expect(this.hoverButtonText).toBeVisible();
    }
}
