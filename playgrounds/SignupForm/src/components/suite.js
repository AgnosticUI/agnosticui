import { create, test, skipWhen, enforce, warn, only } from "vest";
import wait from "wait";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("username", "Username is required", () => {
    enforce(data.username).isNotBlank();
  });

  test("username", "Username must be at least 3 characters long", () => {
    enforce(data.username).longerThanOrEquals(3);
  });

  skipWhen(suite.get().hasErrors("username"), () => {
    test.memo(
      "username",
      "Username already exists",
      () => {
        if (data.username) {
          return doesUserExist(data.username);
        }
      },
      [data.username]
    );
  });

  test("password", "Must be at least 5 characters", () => {
    enforce(data.password).longerThan(4);
  });

  test("password", "Password is weak, Maybe add a number?", () => {
    warn();
    enforce(data.password).matches(/[0-9]/);
  });

  test("confirm", "Passwords do not match", () => {
    console.log("Vent -- password: ", data.password, ' confirm: ', confirm)
    enforce(data.confirm).equals(data.password);
  });

  test("tos", () => {
    enforce(data.tos).isTruthy();
  });
});

export default suite;

async function doesUserExist(username) {
  await wait(1000);

  // fake taken username.
  enforce(parseInt(btoa(username), 36) % 3).notEquals(0);
}
