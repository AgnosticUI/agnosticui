import { create, test, enforce, warn, only } from "vest";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("usernameAstro", "Username is required", () => {
    enforce(data.usernameAstro).isNotBlank();
  });

  test("usernameAstro", "Username must be at least 3 characters long", () => {
    enforce(data.usernameAstro).longerThanOrEquals(3);
  });

  test("passwordAstro", "Must be at least 5 characters", () => {
    enforce(data.passwordAstro).longerThan(4);
  });

  test("passwordAstro", "Password is weak, Maybe add a number?", () => {
    warn();
    enforce(data.passwordAstro).matches(/[0-9]/);
  });

  test("confirmAstro", "Passwords do not match", () => {
    enforce(data.confirmAstro).equals(data.passwordAstro);
  });

  test("tosAstro", () => {
    enforce(data.tosAstro).isTruthy();
  });
});

export default suite;
