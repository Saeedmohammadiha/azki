import { getFromLocalStorage } from "@/utils/getFromLocalStorage";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
      data: data,
      selectedCarModel: selectedCarModel,
      selectedCartype: selectedCartype,
      selectedCompany: selectedCompany,
      selectedDriver: selectedDriver,
      selectedThirdParty: selectedThirdParty,
    });
  }, []);

  return (
    <Dialog maxWidth={"md"} open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ textAlign: "right" }}>ثبت اطلاعات</DialogTitle>
      <Grid
        container
        flexDirection={"row-reverse"}
        sx={{ width: "100%", padding: "20px", textAlign: "center" }}
      >
        <List>
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText primary="نام" secondary={data?.data.name} />
          </ListItem>
          <Divider />
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="شرکت بیمه گر قبلی"
              secondary={data?.selectedCompany.title}
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="خودرو"
              secondary={data?.selectedCartype.title}
            />
          </ListItem>
        </List>

        <List>
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="نام خانوادگی"
              secondary={data?.data.lastName}
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="درصد تخفیف ثالث"
              secondary={data?.selectedThirdParty?.title}
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="مدل خودرو"
              secondary={data?.selectedCarModel.title}
            />
          </ListItem>
        </List>

        <List>
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="شماره موبایل"
              secondary={data?.data.mobile}
            />
          </ListItem>
          <Divider />
          <ListItem sx={{ textAlign: "center" }}>
            <ListItemText
              primary="درصد تخفیف حوادث راننده"
              secondary={data?.selectedDriver?.title}
            />
          </ListItem>
        </List>
      </Grid>
      <DialogActions sx={{ direction: "rtl" }}>
        <Button
          color="success"
          sx={{ borderRadius: "16px" }}
          autoFocus
          onClick={() => setOpen(false)}
        >
          لغو
        </Button>
        <Button
          color="success"
          sx={{ borderRadius: "16px" }}
          onClick={() => setOpen(false)}
        >
          تایید
        </Button>
      </DialogActions>
    </Dialog>
  );
}
