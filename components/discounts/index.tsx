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

import styles from "./style.module.scss";
import { useMemo, useState } from "react";
import Modal from "../modal";

export default function Discounts({ data }: { data: Discount[] }) {
  const [thirdParty, setThirdParty] = useState(0);
  const [driver, setDriver] = useState(0);
  const [open, setOpen] = useState(false);

  const items = useMemo(() => {
    return data.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.title}
        </MenuItem>
      );
    });
  }, [data]);

  const handleShowModal = () => {
    if (thirdParty && driver) {
      const selectedThirdParty = data.find((item) => item.id === thirdParty);
      const selectedDriver = data.find((item) => item.id === driver);
      localStorage.setItem(
        "selectedThirdParty",
        JSON.stringify(selectedThirdParty)
      );
      localStorage.setItem("selectedDriver", JSON.stringify(selectedDriver));
      setOpen(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <h2 className={styles.title}>بیمه شخص ثالث</h2>
      <h4 className={styles["opacity"] + " " + styles["title"]}>
        درصد تخفیف بیمه شخص ثالث و راننده را وارد کنید.
      </h4>
      <Grid container direction={"column"} gap={"20px"}>
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
          >
            <MenuItem className={styles.opacity} disabled value={0}>
              <span className={styles.opacity}>درصد تخفیف راننده</span>
            </MenuItem>
            {items}
          </Select>
        </FormControl>
        <Button
          className={styles.button}
          variant="contained"
          onClick={() => handleShowModal()}
        >
          استعلام قیمت
        </Button>
      </Grid>
      {open && <Modal open={open} setOpen={setOpen} />}
    </ThemeProvider>
  );
}
