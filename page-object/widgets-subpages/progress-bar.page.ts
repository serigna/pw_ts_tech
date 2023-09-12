import { Locator, Page, expect } from "@playwright/test";

export class ProgressBarSubpage {
  readonly page: Page;
  readonly progressBar: Locator;
  readonly startButton: Locator;
  readonly stopButton: Locator;
  readonly resetButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.progressBar = page.getByRole("progressbar");
    this.startButton = page.getByRole("button", { name: "Start" });
    this.stopButton = page.getByRole("button", { name: "Stop" });
    this.resetButton = page.getByRole("button", { name: "Reset" });
  }

  async clickStartProgressBarButton(): Promise<void> {
    return this.startButton.click();
  }

  async checkProgressBarColor(color: string): Promise<void> {
    const progressBarColor = await this.progressBar.evaluate((elem) => {
      return window.getComputedStyle(elem).getPropertyValue("background-color");
    });
    return expect(progressBarColor).toBe(color);
  }

  async verifyStopButtonIsPresent(): Promise<void> {
    return expect(this.stopButton).toBeVisible();
  }

  async verifyResetButtonIsPresent(): Promise<void> {
    return expect(this.resetButton).toBeVisible();
  }

  async verifyTheProgressBarHasFinished(): Promise<void> {
    return expect(this.progressBar).toHaveAttribute("aria-valuenow", "100", {
      timeout: 11000,
    });
  }

  async verifyTheProgressBarHasHundredPercent(): Promise<void> {
    expect(this.progressBar).toHaveText("100%");
  }
}
