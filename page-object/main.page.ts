import { Page, Locator, expect } from "@playwright/test";

export class MainPage {
  readonly page: Page;
  readonly elementsSection: Locator;
  readonly formsSection: Locator;
  readonly alertsSetcion: Locator;
  readonly widgetsSection: Locator;
  readonly interactionsSection: Locator;
  readonly bookStoreSectio: Locator;
  readonly mainHeaderText: Locator;

  constructor(page: Page) {
    this.page = page;
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
    this.mainHeaderText = page
      .locator('div.main-header')
  }

  async navigateToTheMainPage(): Promise<void> {
    await this.page.goto('/');
    await this.page.waitForLoadState();
  }

  async navigateToTheElementsSection(): Promise<void> {
    await this.elementsSection.click();
    await this.page.waitForLoadState();
    expect(this.mainHeaderText).toContainText('Elements');
  }

  async navigateToTheWidgetsSection(): Promise<void> {
    await this.widgetsSection.click();
    await this.page.waitForLoadState();
    expect(this.mainHeaderText).toContainText('Widgets');
  }

  async navigateToTheNavigatesSection(): Promise<void> {
    await this.interactionsSection.click();
    await this.page.waitForLoadState();
    expect(this.mainHeaderText).toContainText('Interactions');
  }
}
