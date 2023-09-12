import { test as base } from "@playwright/test";
import { ElementsPage } from "page-object/elements.page";
import { BrokenLinkImages } from "page-object/broken-link-images.page";
import { MainPage } from "page-object/main.page";
import { WidgetsPage } from "page-object/widgets.page";
import { TooltipSubpage } from "page-object/widgets-subpages/tooltip.page"
import { ProgressBarSubpage } from "page-object/widgets-subpages/progress-bar.page"

type PageFixtures = {
  elementsPage: ElementsPage;
  brokenLinksImagesFixture: BrokenLinkImages;
  mainPage: MainPage;
  widgetsPage: WidgetsPage;
  tooltipSubpage: TooltipSubpage;
  progressBarSubpage: ProgressBarSubpage;
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
  widgetsPage: async ({ page }, use) => {
    await use(new WidgetsPage(page));
  },
  tooltipSubpage: async ({ page }, use) => {
    await use(new TooltipSubpage(page));
  },
  progressBarSubpage: async ({ page }, use) => {
    await use(new ProgressBarSubpage(page))
  },
});

export default test;
