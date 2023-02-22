import Joi from "joi";

const registerSchema = Joi.object({
  userName: Joi.string().min(5).max(30).message({
    "string.empty": "Username is require",
    "string.min": "Username must have at least 5",
  }),
  email: Joi.string().email({ tlds: false }).message({
    "any.required": "Email is require",
    "string.email": "Must be a valid email",
    "string.empty": "Email is require",
  }),
  password: Joi.string().alphanum().min(6).required().trim().message({
    "string.empty": "Password is require",
    "string.alphanum": "Password must contain number or alphanum",
    "string.min": "Password must have at least 6",
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .trim()
    .message({
      "any.only": "Confirm password is not match",
      "string.empty": "Confirm password is require",
    })
    .strip(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    });
    return result;
  }
};

export default validateRegister;
