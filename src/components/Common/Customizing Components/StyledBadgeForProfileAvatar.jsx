import { withStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";

export const StyledBadgeForProfileAvatar = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    left: "-16%",
    bottom: "-27%",
    transform: "scale(1) translate(50%, 50%)",
    transformOrigin: "100% 100%",
    "@media(max-width: 600px)": {
      left: "65%",
      bottom: "46%",
    },
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
