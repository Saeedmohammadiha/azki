'use client'

import { Button, Grid, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import styles from "./page.module.scss";

export const theme = createTheme({
  typography: {
    fontFamily: "inherit",
  },
});

const buttonStyles = {
  width: 160,
  padding: "5px",
  borderRadius: 35,
  alignSelf: "flex-end",
  backgroundColor: "#25b79b",
  fontSize: "20px",
  "&:hover": {
    backgroundColor: "#21a088",
  },
};


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.registerContainer}>
        <Grid
          container
          direction={"column"}
          gap={5}
          sx={{ fontFamily: "inherit" }}
        >
          <h2 className={styles.title}>ثبت نام</h2>
          <Grid
            container
            justifyContent={"space-between"}
            sx={{ fontFamily: "inherit" }}
          >
            <TextField
              hiddenLabel
              sx={{ width: "47%", fontFamily: "inherit" }}
              placeholder="نام"
              variant="outlined"
              color="success"
            />
            <TextField
              hiddenLabel
              sx={{ width: "47%" }}
              placeholder="نام خانوادگی"
              variant="outlined"
              color="success"
            />
          </Grid>
          <Grid container direction={"column"} gap={5}>
            <TextField
              hiddenLabel
              fullWidth
              placeholder="شماره موبایل"
              variant="outlined"
              color="success"
            />
            <TextField
              hiddenLabel
              fullWidth
              placeholder="رمز عبور"
              variant="outlined"
              color="success"
            />
          </Grid>
          <Button sx={buttonStyles} variant="contained">
            ثبت نام
          </Button>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
