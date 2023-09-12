import test from "@lib/conftest";
import { faker } from "@faker-js/faker/locale/en";
// import { ActionsAPICustomLibrary } from "@lib/ActionsAPICustomLibrary"

test.describe("End-2-End API tests suite", () => {
  test("Creation of user account - Positive path", async ({
    actionsAPICustomLibrary,
  }) => {
    const username = faker.internet.userName();
    const password = faker.internet.password() + "$";

    const responseStatus = await actionsAPICustomLibrary.createUser(
      username,
      password
    );

    await actionsAPICustomLibrary.verifyTheResponseStatus200(responseStatus);

    const accessTokenResponse = await actionsAPICustomLibrary.generateAPIToken(
      username,
      password
    );
    await actionsAPICustomLibrary.verifyTheResponseStatus200(
      accessTokenResponse
    );
  });

  test("Creation of user account - Negative path", async ({
    actionsAPICustomLibrary,
  }) => {
    const username = faker.internet.userName();
    const password = faker.internet.password();

    const userIdResponse = await actionsAPICustomLibrary.createUser(
      username,
      password
    );
    await actionsAPICustomLibrary.userCannotBeCreateErrorMessage(userIdResponse)
  });
});
