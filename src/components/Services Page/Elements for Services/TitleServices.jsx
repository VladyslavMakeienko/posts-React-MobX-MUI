import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerTitleStyles: {
    display: "flex",
    justifyContent: "flex-end",
    margin: "0 12px 7px 0",
  },
  textTitleStyles: {
    fontFamily: "Arial",
    fontSize: "13px",
    fontWeight: " 400",
    lineHeight: "15px",
    letterSpacing: "0px",
    color: "#333333",
  },
}));

export const TitleServices = () => {
  const classes = useStyles();
  const textTitleServices = `Услуг`;
  return (
    <div className={classes.containerTitleStyles}>
      <Typography className={classes.textTitleStyles}>
        {textTitleServices}
      </Typography>
    </div>
  );
};
