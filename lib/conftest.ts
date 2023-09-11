import { test as base } from "@playwright/test";
import { ElementsPage } from "page-object/elements.page";
import { BrokenLinkImages } from "page-object/broken-link-images.page";
import { MainPage } from "page-object/main.page";

type PageFixtures = {
  elementsPage: ElementsPage;
  brokenLinksImagesFixture: BrokenLinkImages;
  mainPage: MainPage;
};

const test = base.extend<PageFixtures>({
  elementsPage: async ({ page }, use) => {
    await use(new ElementsPage(page));
  },
  brokenLinksImagesFixture: async ({ page }, use) => {
    await use(new BrokenLinkImages(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
});

export default test;
