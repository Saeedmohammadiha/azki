import { getFromLocalStorage } from "@/utils/getFromLocalStorage";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function Modal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [data, setData] = useState<DialogData>();

  useEffect(() => {
    //getting data from localstorage
    const data = getFromLocalStorage("data");
    const selectedCartype = getFromLocalStorage("selectedCartype");
    const selectedCarModel = getFromLocalStorage("selectedCarModel");
    const selectedCompany = getFromLocalStorage("selectedCompany");
    const selectedThirdParty = getFromLocalStorage("selectedThirdParty");
    const selectedDriver = getFromLocalStorage("selectedDriver");

    setData({
      ...data,
      selectedCarModel: selectedCarModel?.title,
      selectedCartype: selectedCartype?.title,
      selectedCompany: selectedCompany?.title,
      selectedDriver: selectedDriver?.title,
      selectedThirdParty: selectedThirdParty?.title,
    });
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)} sx={{ zIndex: "20" }}>
      <DialogTitle className={styles.title}>ثبت اطلاعات</DialogTitle>
      <Grid container className={styles.container}>
        <List className={styles.list}>
          <ListItem>
            <ListItemText primary="نام" secondary={data?.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="نام خانوادگی" secondary={data?.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="شماره موبایل" secondary={data?.mobile} />
          </ListItem>
        </List>
        <List className={styles.list}>
          <ListItem>
            <ListItemText primary="خودرو" secondary={data?.selectedCartype} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="مدل خودرو"
              secondary={data?.selectedCarModel}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="شرکت بیمه گر قبلی"
              secondary={data?.selectedCompany}
            />
          </ListItem>
        </List>
        <List className={styles.list}>
          <ListItem>
            <ListItemText
              primary="درصد تخفیف ثالث"
              secondary={data?.selectedThirdParty}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="درصد تخفیف حوادث راننده"
              secondary={data?.selectedDriver}
            />
          </ListItem>
        </List>
      </Grid>
      <DialogActions className={styles.actions}>
        <Button color="success" autoFocus onClick={() => setOpen(false)}>
          لغو
        </Button>
        <Button color="success" onClick={() => setOpen(false)}>
          تایید
        </Button>
      </DialogActions>
    </Dialog>
  );
}
