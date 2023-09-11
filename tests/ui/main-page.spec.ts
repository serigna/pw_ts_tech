import test from "@lib/conftest";

test.describe("Ui test suite", () => {
  test("Verify user can enter new data into the table", async ({
    elementsPage, mainPage
  }) => {
    let name: string,
      lastName: string,
      age: string,
      salary: string,
      email: string,
      department: string;
    name = "Alden";
    lastName = "Cantrell";
    age = "30";
    salary = "12345";
    email = "test@test.com";
    department = "QA";

    await mainPage.navigateToTheMainPage()
    await mainPage.navigateToTheElementsPage()
    await elementsPage.webTableCreation(name, lastName, age, salary, email, department);
    await elementsPage.submitTheRegistrationForm()
    await elementsPage.verifyThatTheDataWasPopulatedCorrectly(name, lastName, age, salary, email, department);
  });

  test("Verify user can edit the row in a table", async ({
    elementsPage, mainPage
  }) => {
    let name: string,
      lastName: string,
      age: string,
      salary: string,
      email: string,
      department: string;
    
    name = "Alden";
    lastName = "Cantrell";
    age = "30";
    salary = "12345";
    email = "test@test.com";
    department = "QA";

    
    await mainPage.navigateToTheMainPage()
    await mainPage.navigateToTheElementsPage()

    await elementsPage.webTableCreation(name, lastName, age, salary, email, department);
    await elementsPage.submitTheRegistrationForm();

    await elementsPage.clickOnTheEditButton(name, lastName, age, salary, email, department);
    await elementsPage.modifyDesiredFieldInTheForm('Name', 'Gerimedica');
    await elementsPage.modifyDesiredFieldInTheForm('Last Name', 'BV');
    await elementsPage.submitTheRegistrationForm();

    await elementsPage.verifyThatTheDataWasPopulatedCorrectly('Gerimedica', 'BV', age, salary, email, department);
  });


  test("Verify broken image", async ({
    brokenLinksImagesFixture, mainPage
  }) => {
    await mainPage.navigateToTheMainPage();
    await mainPage.navigateToTheElementsPage();

    await brokenLinksImagesFixture.navigateToBrokenImagePage();
    await brokenLinksImagesFixture.verifyWhhtherThereIsABrokenImage();
  })

});
