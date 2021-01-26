import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { observer } from "mobx-react-lite";
import { GlobalContext } from "../../utils/context";

const useStyles = makeStyles(() => ({
  containerLikesCountStyles: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "0 10px",
  },
  buttonStyles: {
    padding: "2px",
  },
  iconLikeStyle: {
    width: "20px",
    height: "20px",
  },
  likeCountStyle: {
    fontFamily: "Arial",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "14px",
    letterSpacing: "0px",
  },
}));

export const LikesCount = observer(() => {
  const classes = useStyles();

  const {
    store: {
      frontEndStore: { likesCount, updateCount, clearCount, likeClick },
    },
  } = useContext(GlobalContext);

  const onClickLike = () => {
    if (!likeClick) {
      updateCount();
    } else {
      clearCount();
    }
  };

  return (
    <div className={classes.containerLikesCountStyles}>
      <IconButton
        onClick={() => onClickLike()}
        className={classes.buttonStyles}
      >
        <FavoriteIcon
          className={classes.iconLikeStyle}
          style={{ color: likeClick === false ? "#21CBF3" : "red" }}
        />
      </IconButton>
      <span className={classes.likeCountStyle}>{likesCount}</span>
    </div>
  );
});
