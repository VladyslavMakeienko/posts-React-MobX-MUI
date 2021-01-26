import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, useMediaQuery } from "@material-ui/core";
import { ProfileAvatar } from "./ProfileAvatar";
import { ProfileInfoMob } from "./ProfileInfoMob";

const useStyles = makeStyles(() => ({
  containerProfileInfoStyles: {
    display: " flex",
    background: "linear-gradient(180deg, #FDD639 5%, #ffcc00 15%)",
    border: "1px solid #DADADA",
    borderRadius: "5px",
    height: "54px",
    width: "442px",
    boxShadow: "0px 4px 6px -5px #808080",
    filter: "drop-shadow(-2px 3px 4px)",
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

export const ProfileInfo = () => {
  const classes = useStyles();
  const textAboutServices = `Подберу для вас самые лучшие предложения. 
  Мои услуги абсолютно бесплатны`;

  return (
    <div>
      {useMediaQuery("(max-width:600px)") ? (
        <ProfileInfoMob />
      ) : (
        <div className={classes.containerProfileInfoStyles}>
          <ProfileAvatar />
          <Typography className={classes.textAboutServicesStyles}>
            {textAboutServices}
          </Typography>{" "}
        </div>
      )}
    </div>
  );
};
