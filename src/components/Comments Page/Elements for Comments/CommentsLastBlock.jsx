import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { UserProfile } from "./UserProfile";

const useStyles = makeStyles(() => ({
  containerCommentBlockStyles: {
    display: "flex",
    margin: "12px 20px",
    background: "#21CBF3",
    width: "450px",
    height: "100%",
    boxShadow: "0px 4px 10px 0px #808080",
    borderRadius: "3px",
    position: "relative",
    padding: "10px",
    border: "1px solid #C4CBCF",
    "@media(max-width: 600px)": {
      width: "225px",
    },
    "&::after, ::before": {
      content: "close-quote",
      position: "absolute",
      left: "20px",
      top: "-20px",
      border: " 10px solid transparent",
      borderBottom: "10px solid #C4CBCF",
      borderLeft: "10px solid #C4CBCF",
    },
    "&::after": {
      borderBottom: "10px solid #21CBF3",
      borderLeft: "10px solid #21CBF3",
      top: "-19px",
    },
  },
  containerPositionStyles: {
    margin: "6px 0",
  },
}));

export const CommentsLastBlock = observer(({ index, comment }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerPositionStyles}>
      {" "}
      {index <= 2 ? (
        <>
          <UserProfile index={index} />
          <div className={classes.containerCommentBlockStyles}>
            <Typography key={index}>{comment}</Typography>
          </div>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
});
