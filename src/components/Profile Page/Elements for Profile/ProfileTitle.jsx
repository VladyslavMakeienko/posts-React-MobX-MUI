import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerProfileTitleStyles: {
    display: " flex",
    flexDirection: "column",
    margin: "60px 0 5px 125px",
    "@media(max-width: 600px)": {
      margin: "60px 0 -10px 100px",
    },
  },
  textProfileFullNameStyles: {
    fontFamily: "Arial",
    color: "#333333",
    padding: "2px 0",
    fontWeight: "700",
    fontSize: "16px",
    lineHeight: "20px",
    "@media(max-width: 600px)": {
      fontSize: "14px",
    },
  },
  textSpecialtyProfileStyles: {
    fontFamily: "Arial",
    color: "#808080",
    padding: "2px 0",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "20px",
    "@media(max-width: 600px)": {
      fontSize: "10px",
    },
  },
}));

export const ProfileTitle = () => {
  const classes = useStyles();
  const textProfileFullName = `Вероника Харьковская`;
  const textSpecialtyProfile = `Менеджер по продажам`;

  return (
    <div className={classes.containerProfileTitleStyles}>
      <Typography className={classes.textProfileFullNameStyles}>
        {textProfileFullName}
      </Typography>
      <Typography
        variant="subtitle1"
        className={classes.textSpecialtyProfileStyles}
      >
        {textSpecialtyProfile}
      </Typography>
    </div>
  );
};
