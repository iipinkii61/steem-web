import Joi from "joi";

const loginSchema = Joi.object({
  emailOrUserName: Joi.string().required().message({
    "string.empty": "Email or username is require",
  }),
  password: Joi.string().required().message({
    "string.empty": "Password is require",
  }),
});

const validateLogin = (input) => {
  const { error } = loginSchema.validate(input, {
    abortEarly: false,
  });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateLogin;
