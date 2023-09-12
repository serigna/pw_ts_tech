import {
  APIResponse,
  expect,
  APIRequestContext,
} from "@playwright/test";

export class ActionsAPICustomLibrary {
  readonly request: APIRequestContext;
  accountPath: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.accountPath = "/Account/v1";
  }

  async createUser(username: string, password: string): Promise<APIResponse> {
    const response = await this.request.post(this.accountPath + "/User", {
      data: {
        userName: username,
        password: password,
      },
    });
    return response;
  }

  async generateAPIToken(
    username: string,
    password: string
  ): Promise<APIResponse> {
    const tokenResponse = await this.request.post(
      this.accountPath + "/GenerateToken",
      {
        data: {
          userName: username,
          password: password,
        },
      }
    );
    return tokenResponse;
  }

  async verifyTheResponseStatus200(response: APIResponse): Promise<void> {
    await expect(response, `200 Status code was not displayed.`).toBeOK();
  }

  async userCannotBeCreateErrorMessage(response: APIResponse): Promise<void> {
    let tokenResponseJSON;

    try {
      tokenResponseJSON = await response.json();
    } catch (error) {
      console.error(error);
    }

    expect(response).not.toBeOK();
    expect(tokenResponseJSON.message).toEqual(
      "Passwords must have at least one non alphanumeric character, " +
        "one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), " +
        "one special character and Password must be eight characters or longer."
    );
  }
}
