import type { Page, Locator } from '@playwright/test'
import { UiActions  } from '@lib/uiActions.lib'

export class MainPage {
    readonly page: Page
    readonly uiActions: UiActions
    readonly elementsSection: Locator

    constructor (page: Page) {
        this.page = page
        this.uiActions = new UiActions(this.page)
        this.elementsSection = 
    }

}