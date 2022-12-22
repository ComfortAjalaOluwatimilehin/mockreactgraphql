import
  {
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
  } from "@mui/material";
import { IStudentsProps } from "../../types/interfaces";
import styles from "./styles.module.scss";
export const Students: React.FC<IStudentsProps> = ({ rows, columns, onSelect}) => {
  return (
    <div className={styles["container"]}>
      {rows.length > 0 && (
        <>
          <Typography variant="h4" component="h4">
            Students
          </Typography>
          <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row: any) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.firstName}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      onClick={(e) => {
                        onSelect(row)
                      }}  
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      {!rows.length && <><Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton /></>}
    </div>
  );
};
