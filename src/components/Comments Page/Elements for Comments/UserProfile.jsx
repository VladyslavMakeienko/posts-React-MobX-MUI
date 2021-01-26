import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ManAvatar from "../../../images/ManAvatar.png";
import WomanAvatar from "../../../images/WomanAvatar.png";
import UserAvatar from "../../../images/UserAvatar.png";
import { Typography } from "@material-ui/core";
import moment from "moment";
import "moment/locale/ru";
import { observer } from "mobx-react-lite";
import { StyledBadge } from "../../Common/Customizing Components/StyledBadge";
import { StyledBadgeOnline } from "../../Common/Customizing Components/StyledBadgeOnline";
import { AvatarForCommentsPage } from "../../Common/Customizing Components/AvatarForCommentsPage";

const now = moment().format("LL");
moment.locale("es");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  dateStyles: {
    fontFamily: "Arial",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "19px",
    letterSpacing: "0px",
    color: "gray",
    margin: "0 0 0 10px",
    "@media(max-width: 600px)": {
      margin: "7px 0",
    },
  },
  nameStyles: {
    fontFamily: "Arial",
    fontSize: "19px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "19px",
    letterSpacing: "0px",
    color: "#333",
    "@media(max-width: 600px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export const UserProfile = observer(({ index }) => {
  const classes = useStyles();
  const textNameVladyslav = `Владислав`;
  const textNameSamuel = `Самуил`;
  const textNameLilia = `Лилия Семёновна`;
  const textNameAnonymous = `Anonymous`;

  return (
    <div className={classes.root}>
      {index > 5 ? (
        <StyledBadgeOnline
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <AvatarForCommentsPage alt="Photo Avatar" src={UserAvatar} />
        </StyledBadgeOnline>
      ) : (
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <AvatarForCommentsPage
            alt="Photo Avatar"
            src={
              index === 0 ? ManAvatar : index === 3 ? ManAvatar : WomanAvatar
            }
          />
        </StyledBadge>
      )}

      <Typography className={classes.nameStyles}>
        {index === 0
          ? textNameVladyslav
          : index === 3
          ? textNameSamuel
          : index > 5
          ? textNameAnonymous
          : textNameLilia}
        <span className={classes.dateStyles}>{now}</span>
      </Typography>
    </div>
  );
});
