import { MainPage } from "./main.page";
import { Page } from "@playwright/test";
import { WebTablesElements } from "./elements-pages/web-tables.page";

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
    await this.mainPage.navigateToTheElementsPage();
    await this.page.waitForLoadState();
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

  async verifyThatTheDataWasPopulatedCorrectly(
    name: string,
    lastName: string,
    age: string,
    salary: string,
    email: string,
    department: string
  ): Promise<void> {
    await this.webTablesElements.submitTheRegistrationForm();
    await this.webTablesElements.verifyTheSubmittedData(
      name,
      lastName,
      age,
      salary,
      email,
      department
    );
  }
}
