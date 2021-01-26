import { withStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

export const AvatarForCommentsPage = withStyles((theme) => ({
  root: {
    width: 35,
    height: 35,
    border: `2px solid ${theme.palette.background.paper}`,
    objectFit: "cover",
    filter: "drop-shadow(-1px 3px 4px)",
  },
}))(Avatar);
