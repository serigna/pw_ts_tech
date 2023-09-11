import type { Page } from '@playwright/test'

export class UiActions {
    readonly page: Page

    constructor (page: Page) {
        this.page = page
    }


}
