import test from "@lib/conftest";

test.describe("Ui test suite", () => {
  test.only("Verify user can enter new data into the table", async ({
    elementsPage,
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

    await elementsPage.navigateToElementsPage();
    await elementsPage.webTableCreation(name, lastName, age, salary, email, department);
    await elementsPage.submitTheRegistrationForm()
    await elementsPage.verifyThatTheDataWasPopulatedCorrectly(name, lastName, age, salary, email, department);
  });

  test("Verify user can edit the row in a table", async ({
    page,
    elementsPage,
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

    await elementsPage.navigateToElementsPage();
    await elementsPage.webTableCreation(name, lastName, age, salary, email, department);
    await elementsPage.clickOnTheEditButton(name, lastName, age, salary, email, department);
    await elementsPage.modifyDesiredFieldInTheForm('Name', 'test')
    await elementsPage.submitTheRegistrationForm()
    await elementsPage.verifyThatTheDataWasPopulatedCorrectly(name, lastName, age, salary, email, department);

  });
});
