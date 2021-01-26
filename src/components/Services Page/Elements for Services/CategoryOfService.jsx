import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerProfileInfoStyles: {
    display: " flex",
    flexDirection: "column",
    borderLeft: "1px solid hsl(0deg 0% 20% / 30%)",
    margin: "10px 0",
    "@media(max-width: 600px)": {
      margin: "10px 15px 10px 0",
    },
  },
  textAboutServicesStyles: {
    fontFamily: "Arial",
    color: "#333333",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "26px",
    padding: "1px 0px 1px 5px",
  },
  blockGreenStyles: {
    width: "219px",
    backgroundColor: "#44b700",
    height: "24px",
    borderRadius: "0px 3px 3px 0px",
    margin: "0 0 1px 0",
    "@media(max-width: 600px)": {
      width: "166px",
    },
  },
  blockBlueStyles: {
    width: "54px",
    backgroundColor: "#21cbf3",
    height: "24px",
    borderRadius: "0px 3px 3px 0px",
    margin: "1px 0 1px 0",
  },
  textAboutServices2Styles: {
    fontFamily: "Arial",
    color: "#333333",
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "26px",
    padding: "0px 0px 0px 5px",
    position: "absolute",
  },
  blockBlueSecondStyles: {
    width: "36px",
    backgroundColor: "#21cbf3",
    height: "24px",
    borderRadius: "0px 3px 3px 0px",
    margin: "2px 0 0 0",
  },
}));

export const CategoryOfService = () => {
  const classes = useStyles();
  const textCategory = `Ручное бронирование`;
  const textCategorySecond = `Пакетные туры`;
  const textCategoryThird = `Отели`;

  return (
    <div className={classes.containerProfileInfoStyles}>
      <div className={classes.blockGreenStyles}>
        {" "}
        <Typography className={classes.textAboutServicesStyles}>
          {textCategory}
        </Typography>
      </div>

      <span className={classes.blockBlueStyles}>
        {" "}
        <Typography className={classes.textAboutServices2Styles}>
          {textCategorySecond}
        </Typography>
      </span>
      <span className={classes.blockBlueSecondStyles}>
        {" "}
        <Typography className={classes.textAboutServices2Styles}>
          {textCategoryThird}
        </Typography>
      </span>
    </div>
  );
};
