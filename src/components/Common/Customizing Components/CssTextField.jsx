import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

export const CssTextField = withStyles({
  root: {
    "& .MuiInputLabel-outlined": {
      zIndex: 1,
      color: "#333333",
    },
    "& label.Mui-focused": {
      color: "#2196F3",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #21CBF3",
        boxShadow: "0px 4px 10px 0px #73e4ff",
      },
      "&:hover fieldset": {
        border: "2px solid #73e4ff",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #2196F3",
      },
    },
  },
})(TextField);
