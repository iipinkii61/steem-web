import Joi from "joi";

const checkEmailSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).message({
    "any.required": "Email is require",
    "string.email": "Must be a valid email",
    "string.empty": "Email is require",
  }),
  confirmEmail: Joi.string().valid(Joi.ref("email")).required().trim().message({
    "any.only": "confirm email is not match",
    "string.empty": "confirm email is require",
  }),
});

const validateCheckEmail = (input) => {
  const { error } = checkEmailSchema.validate(input, {
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

export default validateCheckEmail;
