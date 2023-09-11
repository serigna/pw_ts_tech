import type { Page, Locator } from '@playwright/test'

export class UiActions {
    readonly page: Page

    constructor (page: Page) {
        this.page = page
    }

    async navigateToThePage (url: string): Promise<void> {
        await this.page.goto(url)
        await this.page.waitForLoadState();
    }

    async navigateToTheSection (locator: Locator): Promise<void> {
        await locator.click()
        await this.page.waitForLoadState();
    }

    // async verifyCurrentUrl (text: string): Promise<void> {
    //     await 
    // }
}
