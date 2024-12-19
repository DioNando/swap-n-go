export const nameRules = [(v: string) => !!v || "Le nom est requis"];

export const emailRules = [
  (v: string) => !!v || "L'email est requis",
  (v: string) => /.+@.+\..+/.test(v) || "L'email doit être valide",
];

export const phoneRules = [
  (v: string) => !!v || "Le numéro de téléphone est requis",
  (v: string) =>
    v.length >= 10 ||
    "Le numéro de téléphone doit comporter au moins 10 caractères",
  (v: string) =>
    /^\+?\d+$/.test(v) ||
    "Le numéro de téléphone doit être numérique et peut commencer par '+'",
];

export const passwordRules = [
  (v: string) => !!v || "Le mot de passe est requis",
  (v: string) =>
    v.length >= 6 || "Le mot de passe doit comporter au moins 6 caractères",
];

export const passwordConfirmationRules = (password: string) => [
  (v: string) => !!v || "La confirmation du mot de passe est requise",
  (v: string) => v === password || "Les mots de passe ne correspondent pas",
];
