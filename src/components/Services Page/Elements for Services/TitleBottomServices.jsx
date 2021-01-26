import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerTitleStyles: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: "9px 0 0 0",
  },
  textTitleStyles: {
    fontFamily: " Arial",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "26px",
    letterSpacing: "0px",
    color: "#333333",
  },
  textNumberAllStyles: {
    fontFamily: "Arial",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "15px",
    letterSpacing: "0px",
    margin: "0 17px 0 0",
  },
}));

export const TitleBottomServices = () => {
  const classes = useStyles();
  const textTitleBottom = `Всего`;
  const textNumberAll = `15`;
  return (
    <div className={classes.containerTitleStyles}>
      <Typography className={classes.textTitleStyles}>
        {textTitleBottom}
      </Typography>
      <span className={classes.textNumberAllStyles}>{textNumberAll}</span>
    </div>
  );
};
