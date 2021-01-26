import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { WriteConsultantButton } from "./Elements for Message/WriteConsultantButton";
import { TextFieldForMessage } from "./Elements for Message/TextFieldForMessage";
import { observer } from "mobx-react-lite";
import { GlobalContext } from "../../utils/context";

const useStyles = makeStyles(() => ({
  containerMessagePageStyles: {
    margin: "50px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formStyles: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export const MessagePage = observer(() => {
  const classes = useStyles();
  const {
    store: {
      frontEndStore: { postComment },
    },
  } = useContext(GlobalContext);

  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(comment);
    console.log(comment);
    setComment("");
  };

  const ctrlEnter = (event) => {
    if (event.keyCode === 13 && event.ctrlKey) {
      handleSubmit(event);
    }
  };

  return (
    <div className={classes.containerMessagePageStyles}>
      <form
        className={classes.formStyles}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        label="Message"
        onKeyDown={ctrlEnter}
      >
        <TextFieldForMessage comment={comment} setComment={setComment} />
        <WriteConsultantButton handleSubmit={handleSubmit} />
      </form>
    </div>
  );
});
