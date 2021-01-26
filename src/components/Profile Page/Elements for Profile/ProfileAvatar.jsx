import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhotoAvatar from "../../../images/PhotoAvatar.png";
import { StyledBadgeForProfileAvatar } from "../../Common/Customizing Components/StyledBadgeForProfileAvatar";
import { AvatarForProfilePage } from "../../Common/Customizing Components/AvatarForProfilePage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const ProfileAvatar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadgeForProfileAvatar
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        variant="dot"
      >
        <AvatarForProfilePage alt="Photo Avatar" src={PhotoAvatar} />
      </StyledBadgeForProfileAvatar>
    </div>
  );
};
