import { create, test, enforce, warn, only } from "vest";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("usernameReact", "Username is required", () => {
    enforce(data.usernameReact).isNotBlank();
  });

  test("usernameReact", "Username must be at least 3 characters long", () => {
    enforce(data.usernameReact).longerThanOrEquals(3);
  });

  test("passwordReact", "Must be at least 5 characters", () => {
    enforce(data.passwordReact).longerThan(4);
  });

  test("passwordReact", "Password is weak, Maybe add a number?", () => {
    warn();
    enforce(data.passwordReact).matches(/[0-9]/);
  });

  test("confirmReact", "Passwords do not match", () => {
    enforce(data.confirmReact).equals(data.passwordReact);
  });

  test("tosReact", () => {
    enforce(data.tosReact).isTruthy();
  });
});

export default suite;
