import { Button, MenuItem, Paper, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Context } from "../../libs/text";
import { FormProps, Gender, IStudent, Status } from "../../types/interfaces";
import styles from "./styles.module.scss";
export const StudentForm: React.FC<FormProps> = ({ student ,onSave, onGoBack}) => {
  const formik = useFormik<Partial<IStudent>>({
    initialValues: {
      age: student?.age || 0,
      firstName:student?.firstName || "",
      gender: student?.gender || Gender.GIRL,
      lastName: student?.lastName ||"",
      status: student?.status || Status.GRAD,
    },
    validationSchema: yup.object({
      firstName: yup.string().required(Context.form.validation.firstName.required),
      lastName: yup.string().required(Context.form.validation.lastName.required),
      gender: yup.string().required(Context.form.validation.gender.required),
      status: yup.string().required(Context.form.validation.status.required),
      age: yup
        .number()
        .min(0, Context.form.validation.age.min)
        .max(150, Context.form.validation.age.max)
        .required(Context.form.validation.age.required),
    }),
    onSubmit: (values ) => {
     onSave(values)
    },
  });

  return (
    <div className={styles["container"]}>
      <Paper elevation={3} className={styles["paper"]}>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          className={styles["form-control"]}
        />
        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          className={styles["form-control"]}
        />
         <TextField
          fullWidth
          id="age"
          name="age"
          label="Age"
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          className={styles["form-control"]}
        />
        <TextField
          id="gender"
          select
          name="gender"
          label="Gender"
          onChange={formik.handleChange}
          value={formik.values.gender}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
          className={styles["form-control"]}
        >
          {Object.values(Gender).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="status"
          select
          name="status"
          label="Status"
          onChange={formik.handleChange}
          value={formik.values.status}
          error={formik.touched.status && Boolean(formik.errors.status)}
          helperText={formik.touched.status && formik.errors.status}
          className={styles["form-control"]}
        >
          {Object.values(Status).map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <Button onClick={onGoBack}>Go Back</Button>
      </Paper>
    </div>
  );
};
