import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

export const AvatarForProfilePage = withStyles((theme) => ({
  root: {
    border: `2px solid ${theme.palette.background.paper}`,
    objectFit: "cover",
    position: "relative",
    width: 124,
    height: 124,
    transform: "translateX(-8px)",
    marginTop: "-58px",
    marginLeft: "-20px",
    "@media(max-width: 600px)": {
      width: 70,
      height: 70,
      marginLeft: "20px",
      filter: "drop-shadow(-2px 3px 4px)",
    },
  },
}))(Avatar);
