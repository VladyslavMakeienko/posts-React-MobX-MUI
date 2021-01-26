import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { ProfileAvatar } from "./ProfileAvatar";

const useStyles = makeStyles(() => ({
  containerAboutServicesStyles: {
    display: "flex",
    margin: "12px 20px",
    background: "linear-gradient(180deg, #FDD639 5%, #ffcc00 15%)",
    border: "1px solid #DADADA",
    maxWidth: "450px",
    height: "100%",
    boxShadow: "0px 4px 10px 0px #808080",
    borderRadius: "3px",
    position: "relative",
    padding: "10px",
    "&::after, ::before": {
      content: "close-quote",
      position: "absolute",
      left: "20px",
      top: "-20px",
      border: " 10px solid transparent",
      borderBottom: "10px solid #DADADA",
      borderLeft: "10px solid #DADADA",
    },
    "&::after": {
      borderBottom: "10px solid #FDD639",
      borderLeft: "10px solid #FDD639",
      top: "-19px",
    },
    "@media(max-width: 600px)": {
      maxWidth: "368px",
      margin: "12px 60px",
    },
  },
  textAboutServicesStyles: {
    fontFamily: "Arial",
    color: "#333333",
    padding: "5px 0",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
  },
}));

export const ProfileInfoMob = observer(() => {
  const classes = useStyles();
  const textAboutServices = `Подберу для вас самые лучшие предложения. 
  Мои услуги абсолютно бесплатны`;
  return (
    <div>
      <ProfileAvatar />
      <div className={classes.containerAboutServicesStyles}>
        <Typography className={classes.textAboutServicesStyles}>
          {textAboutServices}
        </Typography>
      </div>
    </div>
  );
});
