/**
 * Intentionally naive i18n for demonstration purposes only :-)
 * Currently only supports en_US and es.
 */
export const i18n = {
  en_US: {
    signup: "Signup",
    username: "Username",
    password: "Password",
    createAccount: "Create an account below or return to ",
    login: "log in",
    confirm: "Confirm",
    passwordVisibilityToggle: "Password visibility toggle",
    confirmPasswordVisibilityToggle: "Confirm password visibility toggle",
    agreeTOS: "I have read and agree to terms of service",
    usernameRequired: "Username is required.",
    usernameLength: "Username must be at least 3 characters long.",
    passwordLength: "Must be at least 5 characters.",
    passwordNumber: "Password requires at least one number.",
    passwordMatch: "Passwords do not match.",
  },
  es: {
    signup: "Regístrate",
    username: "Nombre de usuario",
    password: "Clave",
    createAccount: "Cree una cuenta a continuación o regrese a ",
    login: "iniciar sesión",
    confirm: "Confirmar",
    passwordVisibilityToggle: "Cambio de visibilidad de contraseña",
    confirmPasswordVisibilityToggle: "Confirmar alternancia de visibilidad de contraseña",
    agreeTOS: "He leído y acepto los términos de servicio",
    usernameRequired: "Se requiere nombre de usuario.",
    usernameLength: "El nombre de usuario debe tener al menos 3 caracteres.",
    passwordLength: "Debe tener al menos 5 caracteres.",
    passwordNumber: "La contraseña requiere al menos un número.",
    passwordMatch: "Las contraseñas no coinciden.",
  },
  fr: {
    signup: "Inscrivez-vous",
    username: "Nom d'utilisateur",
    password: "Mot de passe",
    createAccount: "Créez un compte ci-dessous ou retournez à ",
    login: "connexion",
    confirm: "Confirmer",
    passwordVisibilityToggle: "Basculement de la visibilité du mot de passe",
    confirmPasswordVisibilityToggle: "Confirmer le basculement de la visibilité du mot de passe",
    agreeTOS: "J'ai lu et j'accepte les conditions d'utilisation",
    usernameRequired: "Nom d'utilisateur est nécessaire.",
    usernameLength: "Le nom d'utilisateur doit comporter au moins 3 caractères.",
    passwordLength: "Doit être au moins 5 caractères.",
    passwordNumber: "Le mot de passe nécessite au moins un chiffre.",
    passwordMatch: "Les mots de passe ne correspondent pas.",
  },
};

export const getI18n = (lang: string, key: string) => {
  return i18n[lang][key];
};
