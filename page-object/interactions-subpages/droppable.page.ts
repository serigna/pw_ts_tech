import { Page, Locator, expect } from "@playwright/test";

export class DroppableSubpage {
  readonly page: Page;
  readonly dragMeElement: Locator;
  readonly dropHereElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dragMeElement = page.getByText("Drag me", { exact: true });
    this.dropHereElement = page.getByLabel("Simple").locator("#droppable");
  }

  async dragAndDropTheElement(): Promise<void> {
    return this.dragMeElement.dragTo(this.dropHereElement);
  }

  async verifyThatTheElementIsDragged(): Promise<void> {
    expect(this.dropHereElement).toHaveText("Dropped!");
  }

  // TODO: assertion for color change of the object
}
