import { MainPage } from "./main.page";
import { Page } from "@playwright/test";
import { WebTablesElements } from "./elements-subpages/web-tables.page";

export class ElementsPage {
  readonly mainPage: MainPage;
  readonly page: Page;
  readonly webTablesElements: WebTablesElements;

  constructor(page: Page) {
    this.page = page;
    this.mainPage = new MainPage(this.page);
    this.webTablesElements = new WebTablesElements(this.page);
  }

  async navigateToElementsPage(): Promise<void> {
    await this.mainPage.navigateToTheMainPage();
    await this.mainPage.navigateToTheElementsSection();
    await this.page.waitForLoadState("domcontentloaded");
  }

  async webTableCreation(
    name: string,
    lastName: string,
    age: string,
    salary: string,
    email: string,
    department: string
  ): Promise<void> {
    await this.webTablesElements.navigateToWebTableElement();
    await this.webTablesElements.openRegistrationForm();
    await this.webTablesElements.populateFirstNameField(name);
    await this.webTablesElements.populateLastNameField(lastName);
    await this.webTablesElements.populateAgeField(age);
    await this.webTablesElements.populateSalaryField(salary);
    await this.webTablesElements.populateEmailField(email);
    await this.webTablesElements.populateDepartmentField(department);
  }

  async submitTheRegistrationForm(): Promise<void> {
    await this.webTablesElements.submitTheRegistrationForm();
  }

  async verifyThatTheDataWasPopulatedCorrectly(
    name: string,
    lastName: string,
    age: string,
    salary: string,
    email: string,
    department: string
  ): Promise<void> {
    await this.webTablesElements.verifyTheSubmittedData(
      name,
      lastName,
      age,
      salary,
      email,
      department
    );
  }

  async clickOnTheEditButton(
    name: string,
    lastName: string,
    age: string,
    salary: string,
    email: string,
    department: string
  ): Promise<void> {
    await this.page
    .getByRole('row', { name: `${name} ${lastName} ${age} ${email} ${salary} ${department} Edit Delete` })
    .getByTitle('Edit')
    .getByRole('img').click();
  }

  async modifyDesiredFieldInTheForm(field: string, new_value: string): Promise<void> {
    switch (field) {
      case 'Name':
        await this.webTablesElements.populateFirstNameField(new_value);
        break
      case 'Last Name':
        await this.webTablesElements.populateLastNameField(new_value);
        break
      case 'Department':
        await this.webTablesElements.populateDepartmentField(new_value);
        break
      case 'Age':
        await this.webTablesElements.populateAgeField(new_value);
        break
      case 'Email':
        await this.webTablesElements.populateEmailField(new_value);
        break
      case 'Salary':
        await this.webTablesElements.populateSalaryField(new_value);
        break
    }
  }
}
