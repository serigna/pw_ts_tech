import type { Page, Locator } from "@playwright/test";
import { UiActions } from "@lib/uiActions.lib";

export class MainPage {
  readonly page: Page;
  readonly uiActions: UiActions;
  readonly elementsSection: Locator;
  readonly formsSection: Locator;
  readonly alertsSetcion: Locator;
  readonly widgetsSection: Locator;
  readonly interactionsSection: Locator;
  readonly bookStoreSectio: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uiActions = new UiActions(this.page);
    this.elementsSection = page
      .locator("div")
      .filter({ hasText: /^Elements$/ })
      .first();
    this.formsSection = page
      .locator("div")
      .filter({ hasText: /^Forms$/ })
      .first();
    this.alertsSetcion = page
      .locator("div")
      .filter({ hasText: /^Alerts, Frame & Windows$/ })
      .first();
    this.widgetsSection = page
      .locator("div")
      .filter({ hasText: /^Widgets$/ })
      .first();
    this.interactionsSection = page
      .locator("div")
      .filter({ hasText: /^Interactions$/ })
      .first();
    this.bookStoreSectio = page
      .locator("div")
      .filter({ hasText: /^Book Store Application$/ })
      .first();
  }

  async navigateToTheMainPage(): Promise<void> {
    this.uiActions.navigateToThePage("/");
  }

  async navigateToTheElementsPage(): Promise<void> {
    this.uiActions.navigateToTheSection(this.elementsSection);
  }
}
