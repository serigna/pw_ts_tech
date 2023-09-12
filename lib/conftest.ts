import { test as base } from "@playwright/test";
import { ElementsPage } from "page-object/elements.page";
import { BrokenLinkImages } from "page-object/broken-link-images.page";
import { MainPage } from "page-object/main.page";
import { WidgetsPage } from "page-object/widgets.page";
import { TooltipSubpage } from "page-object/widgets-subpages/tooltip.page"
import { ProgressBarSubpage } from "page-object/widgets-subpages/progress-bar.page"
import { InteractionsPage } from "page-object/interactions.page"
import { DroppableSubpage } from "page-object/interactions-subpages/droppable.page"
import { ActionsAPICustomLibrary } from "@lib/ActionsAPICustomLibrary"

type PageFixtures = {
  elementsPage: ElementsPage;
  brokenLinksImagesFixture: BrokenLinkImages;
  mainPage: MainPage;
  widgetsPage: WidgetsPage;
  tooltipSubpage: TooltipSubpage;
  progressBarSubpage: ProgressBarSubpage;
  interactionsPage: InteractionsPage;
  droppableSubpage: DroppableSubpage;
  actionsAPICustomLibrary: ActionsAPICustomLibrary;
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
    await use(new ProgressBarSubpage(page));
  },
  interactionsPage: async ({ page }, use) => {
    await use(new InteractionsPage(page));
  },
  droppableSubpage: async ({ page }, use) => {
    await use(new DroppableSubpage(page));
  },
  actionsAPICustomLibrary: async ({ request }, use) => {
    await use(new ActionsAPICustomLibrary(request))
  }
});

export default test;
