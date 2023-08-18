"use client";

import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
} from "@mui/material";
import styles from "./page.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { validate } from "@/utils/validations";
import { useRouter } from "next/navigation";
import { theme } from "@/utils/theme";



export default function Home() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    lastName: "",
    password: "",
    mobile: "",
  });
  const [error, setError] = useState({
    name: "",
    lastName: "",
    password: "",
    mobile: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
    const errorMassage = validate(e.target.name, e.target.value);
    setError({ ...error, [e.target.name]: errorMassage });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
    router.push("/selectInsurance");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.registerContainer}>
        <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>
          <Grid container className={styles.form}>
            <h2 className={styles.title}>ثبت نام</h2>
            <Grid container className={styles.nameInputs}>
              <TextField
                size="small"
                className={styles.input}
                hiddenLabel
                placeholder="نام"
                variant="outlined"
                color="success"
                required
                name="name"
                value={data.name}
                onChange={(e) => handleChange(e)}
                helperText={error.name}
                error={error.name ? true : false}
              />
              <TextField
                size="small"
                className={styles.input}
                hiddenLabel
                placeholder="نام خانوادگی"
                variant="outlined"
                color="success"
                required
                name="lastName"
                value={data.lastName}
                onChange={(e) => handleChange(e)}
                helperText={error.lastName}
                error={error.lastName ? true : false}
              />
            </Grid>
            <Grid container className={styles.flexContainer}>
              <TextField
                size="small"
                hiddenLabel
                fullWidth
                placeholder="شماره موبایل"
                variant="outlined"
                color="success"
                required
                name="mobile"
                value={data.mobile}
                onChange={(e) => handleChange(e)}
                helperText={error.mobile}
                error={error.mobile ? true : false}
              />
              <TextField
                size="small"
                hiddenLabel
                fullWidth
                placeholder="رمز عبور"
                variant="outlined"
                color="success"
                required
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => handleChange(e)}
                helperText={error.password}
                error={error.password ? true : false}
              />
            </Grid>
            <Button
              type="submit"
              className={styles.registerButton}
              variant="contained"
              color="success"
            >
              ثبت نام
            </Button>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}
