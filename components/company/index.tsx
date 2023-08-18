"use client";

import { theme } from "@/utils/theme";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./style.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Company({ data }: { data: Insurance[] }) {
  const router = useRouter();
  const [company, setCompany] = useState(0);

  const hanldeNext = () => {
    const selectedCompany = data.find((item) => item.id === company);
    selectedCompany &&
      localStorage.setItem("selectedCompany", JSON.stringify(selectedCompany));
      router.push('/discounts')
  };
  return (
    <ThemeProvider theme={theme}>
      <h2 className={styles.title}>بیمه شخص ثالث</h2>
      <h4 className={styles["opacity"] + " " + styles["title"]}>
        شرکت بیمه گر قبلی خود را در این بخض وارد کنید.
      </h4>
      <FormControl fullWidth size="small" className={styles.select}>
        <Select
          IconComponent={(props) => {
            return props.className.includes("iconOpen") ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            );
          }}
          value={company}
          onChange={(e) => {
            setCompany(+e.target.value);
          }}
          variant="outlined"
          color="success"
          required
          name="carType"
        >
          <MenuItem className={styles.opacity} disabled value={0}>
            <span className={styles.opacity}>شرکت بیمه گر قبلی</span>
          </MenuItem>
          {data.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Grid container className={styles.buttonsContainer}>
        <Button
          color="success"
          className={styles.button}
          variant="outlined"
          onClick={() => router.back()}
          startIcon={
            <KeyboardArrowRightIcon
              sx={{ position: "absolute", right: 8, top: 8 }}
            />
          }
        >
          مرحله قبل
        </Button>
        <Button
          color="success"
          className={styles.button}
          variant="outlined"
          endIcon={
            <KeyboardArrowLeftIcon
              sx={{ position: "absolute", left: 8, top: 8 }}
            />
          }
          onClick={hanldeNext}
        >
          مرحله بعد
        </Button>
      </Grid>
    </ThemeProvider>
  );
}
