import test, { Page, Locator, expect } from "@playwright/test";

export class WebTablesElements {
  readonly page: Page;
  readonly webTablesOption: Locator;
  readonly addButton: Locator;
  readonly registrationFormTitle: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly ageField: Locator;
  readonly salaryField: Locator;
  readonly departmentField: Locator;
  readonly sumbitRegistrationFromBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.webTablesOption = page.getByText("Web Tables");
    this.addButton = page.getByRole("button", { name: "Add" });
    this.registrationFormTitle = page.getByText("Registration Form");
    this.firstNameField = page.getByPlaceholder("First Name");
    this.lastNameField = page.getByPlaceholder("Last Name");
    this.emailField = page.getByPlaceholder("name@example.com");
    this.ageField = page.getByPlaceholder("Age");
    this.salaryField = page.getByPlaceholder("Salary");
    this.departmentField = page.getByPlaceholder("Department");
    this.sumbitRegistrationFromBtn = page.getByRole("button", {
      name: "Submit",
    });
  }

  async navigateToWebTableElement(): Promise<void> {
    await this.webTablesOption.click();
    await this.page.waitForLoadState();
  }

  async openRegistrationForm(): Promise<void> {
    await this.addButton.click();
    await expect(this.registrationFormTitle).toBeVisible();
  }

  async populateFirstNameField(name: string): Promise<void> {
    await this.firstNameField.fill(name);
  }

  async populateLastNameField(lastName: string): Promise<void> {
    await this.lastNameField.fill(lastName);
  }

  async populateAgeField(age: string): Promise<void> {
    await this.ageField.fill(age);
  }

  async populateEmailField(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  async populateSalaryField(salary: string): Promise<void> {
    await this.salaryField.fill(salary);
  }

  async populateDepartmentField(department: string): Promise<void> {
    await this.departmentField.fill(department);
  }

  async submitTheRegistrationForm(): Promise<void> {
    await this.sumbitRegistrationFromBtn.click();
  }

  async retrieveTheDataFromTable(email: string): Promise<any> {
    let listOfElements

    const row = this.page.locator('div.rt-tr-group')
    const rowTexts = await row.locator(':scope').allInnerTexts()

    rowTexts.forEach((text: string) => {
      if (text.includes(email)) {
        listOfElements = text.split("\n", 6)
      }
    })
    return listOfElements
  }

  async verifyTheSubmittedDataRow(
    text: string,
    email: string,
  ): Promise<void> {

    const rowElements = await this.retrieveTheDataFromTable(email)
    if (!rowElements.includes(text)) {
      throw new Error('There is no such a row in the table.')
    }
  }

  async verifyTheSubmittedData(
    name: string,
    lastName: string,
    age: string,
    email: string,
    salary: string,
    department: string
  ): Promise<void> {
    await this.verifyTheSubmittedDataRow(name, email)
    await this.verifyTheSubmittedDataRow(lastName, email)
    await this.verifyTheSubmittedDataRow(age, email)
    await this.verifyTheSubmittedDataRow(salary, email)
    await this.verifyTheSubmittedDataRow(department, email)
  }

}
