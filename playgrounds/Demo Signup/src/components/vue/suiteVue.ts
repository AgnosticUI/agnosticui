import { create, test, enforce, warn, only } from "vest";

const suite = create((data = {}, currentField, t) => {
  only(currentField);

  test("usernameVue", t('usernameRequired'), () => {
    enforce(data.usernameVue).isNotBlank();
  });

  test("usernameVue", t("usernameLength"), () => {
    enforce(data.usernameVue).longerThanOrEquals(3);
  });

  test("passwordVue", t("passwordLength"), () => {
    enforce(data.passwordVue).longerThan(4);
  });

  test("passwordVue", t("passwordNumber"), () => {
    warn();
    enforce(data.passwordVue).matches(/[0-9]/);
  });

  test("confirmVue", t("passwordMatch"), () => {
    enforce(data.confirmVue).equals(data.passwordVue);
  });

  test("tosVue", () => {
    enforce(data.tosVue).isTruthy();
  });
});

export default suite;
