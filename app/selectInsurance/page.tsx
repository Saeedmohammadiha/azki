'use client'
import { Button } from "@mui/material";
import icon from "../../assets/icons/insurance.svg";
import Image from "next/image";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

const buttons = [
  { id: 1, title: "شخص ثالث", disabled: false },
  { id: 2, title: "بدنه", disabled: true },
];

export default function SelectInsurance() {
  const router = useRouter();
  return (
    <>
      <h2 className={styles.title}>انتخاب بیمه</h2>
      <div className={styles.buttonsContainer}>
        {buttons?.map((button) => {
          return (
            <Button
              key={button.id}
              disabled={button.disabled}
              className={styles.button}
              variant="outlined"
              disableTouchRipple
              color="success"
              onClick={() => {
                router.push("/selectCar");
              }}
            >
              <Image
                style={{ filter: button.disabled ? "opacity(25%)" : "unset" }}
                width={40}
                height={40}
                src={icon}
                alt="icon"
              />
              <span>{button.title}</span>
            </Button>
          );
        })}
      </div>
    </>
  );
}
