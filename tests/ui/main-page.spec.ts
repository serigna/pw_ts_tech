import test from "@lib/conftest";
import { faker } from "@faker-js/faker/locale/en";

test.beforeEach(async ({ 
  mainPage 
}) => {
  await mainPage.navigateToTheMainPage();
})


test.describe("UI test suite", () => {
  test("Verify user can enter new data into the table", async ({
    elementsPage,
    mainPage,
  }) => {
    let name: string,
      lastName: string,
      age: string,
      salary: string,
      email: string,
      department: string;

    /* Despite the task (in both test cases) have the data provided, it is better
    to use random data that proves the application is free of defects. */

    name = faker.person.firstName();
    lastName = faker.person.lastName();
    age = faker.string.numeric({ length: 2 });
    salary = faker.string.numeric({ length: 5 });
    email = faker.internet.email();
    department = "QA";

    await mainPage.navigateToTheElementsSection();
    await elementsPage.webTableCreation(
      name,
      lastName,
      age,
      salary,
      email,
      department
    );
    await elementsPage.submitTheRegistrationForm();
    await elementsPage.verifyThatTheDataWasPopulatedCorrectly(
      name,
      lastName,
      age,
      salary,
      email,
      department
    );
  });

  test("Verify user can edit the row in a table", async ({
    elementsPage,
    mainPage,
  }) => {
    let name: string,
      lastName: string,
      age: string,
      salary: string,
      email: string,
      department: string;

    name = faker.person.firstName();
    lastName = faker.person.lastName();
    age = faker.string.numeric({ length: 2 });
    salary = faker.string.numeric({ length: 5 });
    email = faker.internet.email();
    department = "QA";

    await mainPage.navigateToTheElementsSection();

    await elementsPage.webTableCreation(
      name,
      lastName,
      age,
      salary,
      email,
      department
    );
    await elementsPage.submitTheRegistrationForm();

    await elementsPage.clickOnTheEditButton(
      name,
      lastName,
      age,
      salary,
      email,
      department
    );
    await elementsPage.modifyDesiredFieldInTheForm("Name", "Gerimedica");
    await elementsPage.modifyDesiredFieldInTheForm("Last Name", "BV");
    await elementsPage.submitTheRegistrationForm();

    await elementsPage.verifyThatTheDataWasPopulatedCorrectly(
      "Gerimedica",
      "BV",
      age,
      salary,
      email,
      department
    );
  });

  test("Verify broken image", async ({
    brokenLinksImagesFixture,
    mainPage,
  }) => {
    await mainPage.navigateToTheElementsSection();

    await brokenLinksImagesFixture.navigateToBrokenImagePage();
    await brokenLinksImagesFixture.verifyWhhtherThereIsABrokenImage();
  });

  test("Verify the progress bar", async ({
    mainPage,
    widgetsPage,
    progressBarSubpage,
  }) => {
    await mainPage.navigateToTheWidgetsSection();
    await widgetsPage.navigateToProgressBarSubpage();

    await progressBarSubpage.clickStartProgressBarButton();
    await progressBarSubpage.verifyStopButtonIsPresent();
    await progressBarSubpage.checkProgressBarColor("rgb(23, 162, 184)");

    await progressBarSubpage.verifyTheProgressBarHasFinished();
    await progressBarSubpage.verifyResetButtonIsPresent();
    await progressBarSubpage.verifyTheProgressBarHasHundredPercent();
    await progressBarSubpage.checkProgressBarColor("rgb(40, 167, 69)");
  });

  test("Verify the tooltip", async ({
    mainPage,
    widgetsPage,
    tooltipSubpage,
  }) => {
    await mainPage.navigateToTheWidgetsSection();

    await widgetsPage.navigateToTooltipsSubpage();

    await tooltipSubpage.clickOnTheHoverButton();
    await tooltipSubpage.verifyTheTextIsVisible();
  });

  test("Verify user can drag and drop", async ({
    mainPage,
    interactionsPage,
    droppableSubpage,
  }) => {
    await mainPage.navigateToTheNavigatesSection();

    await interactionsPage.navigateToTooltipsSubpage();

    await droppableSubpage.dragAndDropTheElement();
    await droppableSubpage.verifyThatTheElementIsDragged();
  });
});
