import { test as base } from "@playwright/test";
import { ElementsPage } from "page-object/elements.page";

interface ElementsPageFixture {
  elementsPage: ElementsPage;
}

const test = base.extend<ElementsPageFixture>({
  elementsPage: async ({ page }, use) => {
    await use(new ElementsPage(page));
  },
});

export default test;
