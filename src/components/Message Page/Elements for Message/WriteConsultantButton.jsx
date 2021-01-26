import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, #FDD639 5%, #ffcc00 15%)",
    border: 0,
    borderRadius: 23,
    boxShadow: "0 3px 5px 2px #ebbd02",
    color: "#333333",
    height: 48,
    padding: "0 30px",
    margin: "23px 0 0 0",
    "&:hover": {
      background: "linear-gradient(180deg, #FDD639 5%, #ffd633 15%)",
      boxShadow: "0 3px 5px 2px #ffde5a",
    },
    "&:active": {
      transform: "translateY(4px)",
      background: "linear-gradient(180deg, #dbba35 5%, #eabb00 15%)",
      boxShadow: "0 3px 5px 2px #d5ab00",
    },
  },
});

export const WriteConsultantButton = observer(({ handleSubmit }) => {
  const classes = useStyles();
  const textWriteConsultantButton = `Написать консультанту`;
  return (
    <Button className={classes.root} onClick={handleSubmit} type="submit">
      {textWriteConsultantButton}
    </Button>
  );
});
