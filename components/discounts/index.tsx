"use client";
import { theme } from "@/app/page";
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

import styles from "./style.module.scss";
import { useState } from "react";

export default function Discounts({ data }: { data: Discount[] }) {
  const [thirdParty, setThirdParty] = useState(0);
  const [driver, setDriver] = useState(0);

  const items = data.map((item) => {
    return (
      <MenuItem key={item.id} value={item.id}>
        {item.title}
      </MenuItem>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <h2 className={styles.title}>بیمه شخص ثالث</h2>
      <h4 className={styles["opacity"] + " " + styles["title"]}>
        درصد تخفیف بیمه شخص ثالث و راننده را وارد کنید.
      </h4>
      <Grid container direction={'column'} gap={"20px"}>
        <FormControl fullWidth size="small" className={styles.select}>
          <Select
            IconComponent={(props) => {
              return props.className.includes("iconOpen") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              );
            }}
            value={thirdParty}
            onChange={(e) => {
              setThirdParty(+e.target.value);
            }}
            variant="outlined"
            color="success"
            required
            name="carType"
          >
            <MenuItem className={styles.opacity} disabled value={0}>
              <span className={styles.opacity}>درصد تخفیف ثالث</span>
            </MenuItem>
            {items}
          </Select>
        </FormControl>
        <FormControl fullWidth size="small" className={styles.select}>
          <Select
            IconComponent={(props) => {
              return props.className.includes("iconOpen") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              );
            }}
            value={driver}
            onChange={(e) => {
              setDriver(+e.target.value);
            }}
            variant="outlined"
            color="success"
            required
            name="carType"
          >
            <MenuItem className={styles.opacity} disabled value={0}>
              <span className={styles.opacity}>درصد تخفیف راننده</span>
            </MenuItem>
            {items}
          </Select>
        </FormControl>
        <Button
          //color="success"
          className={styles.button}
          variant="contained"
          onClick={() => console.log("modal open")}
        >
          استعلام قیمت
        </Button>
      </Grid>
    </ThemeProvider>
  );
}
