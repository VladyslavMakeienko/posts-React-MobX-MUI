import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import { CssTextField } from "../../Common/Customizing Components/CssTextField";

const useStyles = makeStyles(() => ({
  containerTextFieldForMessageStyles: {
    display: "flex",
    flexDirection: "column",
  },
  textFieldForMessageStyles: {
    width: "468px",
    "@media(max-width: 600px)": {
      width: "368px",
    },
    "@media(max-width: 480px)": {
      width: "268px",
    },
  },
}));

export const TextFieldForMessage = observer(({ comment, setComment }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerTextFieldForMessageStyles}>
      <div>
        <CssTextField
          id="outlined-multiline-static"
          label="Сообщение консультанту"
          name="title"
          multiline
          rows={4}
          placeholder="Введите Ваше сообщение..."
          variant="outlined"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          InputLabelProps={{ shrink: true }}
          className={classes.textFieldForMessageStyles}
        />
      </div>
    </div>
  );
});
