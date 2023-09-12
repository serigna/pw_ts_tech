import test, { Page, Locator, expect } from "@playwright/test";
import { ElementsPage } from "./elements.page";

export class BrokenLinkImages {
  readonly page: Page;
  readonly elementsPage: ElementsPage;
  readonly brokenLinksImagesOption: Locator;
  readonly imageLoc: Locator;

  constructor(page: Page) {
    this.page = page;
    this.brokenLinksImagesOption = page.getByText("Broken Links - Images");
    this.imageLoc = page.locator("img");
  }

  async navigateToBrokenImagePage(): Promise<void> {
    await this.brokenLinksImagesOption.click();
    await this.page.waitForLoadState();
  }

  async verifyWhhtherThereIsABrokenImage(): Promise<void> {
    const allImages = await this.imageLoc.all();

    for (const img of allImages) {
      const imgSrc = await img.getAttribute("src");

      if (imgSrc?.length > 1) {
        const res = await this.page.request.get(imgSrc);
        const htmlContent = res.headersArray();

        for (const htmlItem of htmlContent) {
          if (htmlItem.value.includes("text/html")) {
            throw new Error("There is a broken image on the page.");
          }
        }
      }
    }
  }
}
