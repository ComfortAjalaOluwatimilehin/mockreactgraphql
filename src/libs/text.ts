export const Context = {
  form: {
    validation: {
      firstName: {
        required: "First name is required",
      },
      lastName: {
        required: "Last name is required",
      },
      gender: {
        required: "Gender is required",
      },
      status: {
        required: "Status is required",
      },
      age:{
        required:"Age  is required",
        min:"Age cannot be lower than 0",
        max:"Age cannot be higher than 150",

      }
    },
  },
};
