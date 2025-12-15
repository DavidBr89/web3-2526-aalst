import { body } from "express-validator";

export const registerValidator = [
  body("firstName")
    .exists()
    .withMessage("Voornaam is verplicht")
    .isLength({
      min: 2,
      max: 50,
    })
    .withMessage("Minstens 2 karakters en max 50 karakters")
    .trim(),
  body("lastName").exists().trim(),
  body("email").exists().isEmail().normalizeEmail(),
  body("password").exists().isStrongPassword({
    minLength: 8,
    minSymbols: 1,
    minUppercase: 1,
  }),
];
