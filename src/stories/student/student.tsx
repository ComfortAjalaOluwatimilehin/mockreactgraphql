import
  {
    Button,
    ButtonGroup,
    CircularProgress,
    Paper,
    Typography
  } from "@mui/material";
import { IStudentProps } from "../../types/interfaces";
import styles from "./styles.module.scss";

export const Student: React.FC<IStudentProps> = ({
  student,
  onDelete,
  onEdit,
  onGoBack,
}) => {
  return (
    <div className={styles["container"]}>
      <Paper elevation={3}>
        {student && (
          <div className={styles["student-details"]}>
            <Typography variant="subtitle1" className={styles["label"]}>
              <span>Name:</span>
              {` ${student.firstName} ${student.lastName}`}
            </Typography>
            <Typography variant="subtitle1" className={styles["label"]}>
              <span> Age:</span>
              {` ${student.age}`}
            </Typography>
            <Typography variant="subtitle1" className={styles["label"]}>
              <span>Gender:</span>
              {` ${student.gender}`}
            </Typography>
            <Typography variant="subtitle1" className={styles["label"]}>
              <span>Status: </span>
              {` ${student.status.toLowerCase()}`}
            </Typography>
            <ButtonGroup
            disableElevation
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button variant="text" onClick={onGoBack}>
                Go back
              </Button>
              <Button variant="text" onClick={onEdit}>
                Edit
              </Button>
              <Button variant="text" onClick={onDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </div>
        )}
      </Paper>
      {!student && <CircularProgress />}
    </div>
  );
};
