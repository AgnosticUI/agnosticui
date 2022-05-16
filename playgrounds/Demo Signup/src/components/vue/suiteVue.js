import { create, test, enforce, warn, only } from "vest";

const suite = create((data = {}, currentField) => {
  only(currentField);

  test("usernameVue", "Username is required.", () => {
    enforce(data.usernameVue).isNotBlank();
  });

  test("usernameVue", "Username must be at least 3 characters long.", () => {
    enforce(data.usernameVue).longerThanOrEquals(3);
  });

  test("passwordVue", "Must be at least 5 characters.", () => {
    enforce(data.passwordVue).longerThan(4);
  });

  test("passwordVue", "Password requires at least one number.", () => {
    warn();
    enforce(data.passwordVue).matches(/[0-9]/);
  });

  test("confirmVue", "Passwords do not match.", () => {
    enforce(data.confirmVue).equals(data.passwordVue);
  });

  test("tosVue", () => {
    enforce(data.tosVue).isTruthy();
  });
});

export default suite;
