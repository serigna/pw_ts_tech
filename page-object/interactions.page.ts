import { Page, Locator, expect } from "@playwright/test";

export class InteractionsPage {
    readonly page: Page; 
    readonly droppableOption: Locator;
    readonly droppableTitle: Locator;

    constructor (page: Page) {
        this.page = page;
        this.droppableOption = page.getByText('Droppable');
        this.droppableTitle = page.locator('div.main-header');
    }

    async navigateToTooltipsSubpage() {
        await this.droppableOption.click();
        await this.page.waitForLoadState('domcontentloaded');
        expect(this.droppableTitle).toContainText('Droppable');
    }
}
