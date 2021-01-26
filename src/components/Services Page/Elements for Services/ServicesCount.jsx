import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerCountStyles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textNumberStyles: {
    fontFamily: "Arial",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: " 700",
    lineHeight: " 15px",
    letterSpacing: " 0px",
    margin: "0 20px 10px 0",
  },
}));

export const ServicesCount = () => {
  const classes = useStyles();
  const textNumberEleven = `11`;
  const textNumberThree = `3`;
  const textNumberOne = `1`;
  return (
    <div className={classes.containerCountStyles}>
      <Typography className={classes.textNumberStyles}>
        {textNumberEleven}
      </Typography>
      <Typography className={classes.textNumberStyles}>
        {textNumberThree}
      </Typography>
      <Typography className={classes.textNumberStyles}>
        {textNumberOne}
      </Typography>
    </div>
  );
};
