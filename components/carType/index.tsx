"use client";

import styles from "./style.module.scss";
import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { theme } from "@/utils/theme";
import { useRouter } from "next/navigation";

export default function CarType({ data }: { data: Car[] }) {
  const router = useRouter();
  const [carType, setCarType] = useState(0);
  const [carModel, setCarModel] = useState(0);
  const [modelData, setModelData] = useState<CarModel[]>();

  useEffect(() => {
    //fill the items of car model each time the cartype cahnges
    const selectedCartype = data.find((item) => +item.id === carType);
    selectedCartype && setModelData(selectedCartype.usages);
  }, [carType]);

  const hanldeNext = () => {
    const selectedCartype = data.find((item) => +item.id === carType);
    const selectedCarModel = selectedCartype?.usages.find(
      (item) => +item.id === carModel
    );
    selectedCartype &&
      localStorage.setItem("selectedCartype", JSON.stringify(selectedCartype));
    selectedCarModel &&
      localStorage.setItem(
        "selectedCarModel",
        JSON.stringify(selectedCarModel)
      );
    if (selectedCartype && selectedCarModel) {
      router.push("/selectCompany");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <h2 className={styles.title}>بیمه شخص ثالث</h2>
      <h4 className={styles["opacity"] + " " + styles["title"]}>
        نوع و مدل خودرو خود را انتخاب کنید
      </h4>
      <Grid container className={styles.selectsContainer}>
        <FormControl size="small" className={styles.select}>
          <Select
            IconComponent={(props) => {
              return props.className.includes("iconOpen") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              );
            }}
            value={carType}
            onChange={(e) => {
              setCarType(+e.target.value);
              setCarModel(0);
            }}
            variant="outlined"
            color="success"
            required
            name="carType"
          >
            <MenuItem className={styles.opacity} disabled value={0}>
              <span className={styles.opacity}>نوع خودرو</span>
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
        <FormControl size="small" className={styles.select}>
          <Select
            value={carModel}
            onChange={(e) => setCarModel(+e.target.value)}
            variant="outlined"
            color="success"
            required
            name="carModel"
            IconComponent={(props) => {
              return props.className.includes("iconOpen") ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              );
            }}
          >
            <MenuItem disabled value={0}>
              <span className={styles.opacity}>مدل خودرو</span>
            </MenuItem>
            {modelData?.map((item) => {
              return (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
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
          بازگشت
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
