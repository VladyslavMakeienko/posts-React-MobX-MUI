import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";
import { CommentsPage } from "../CommentsPage";
import { CommentsLastPage } from "../CommentsLastPage";
import { CountPage } from "../../Common/CountPage";

const useStyles = makeStyles(() => ({
  containerCommentsLinksStyles: {
    display: "flex",
    flexDirection: "column",
  },
  textLinkStyles: {
    fontFamily: " Arial",
    fontSize: "14px",
    fontStyle: " normal",
    fontWeight: "400",
    lineHeight: "16px",
    letterSpacing: "0px",
    padding: "0 5px",
  },
  containerFirstStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media(max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  containerSecondStyle: {
    flexDirection: "row",
    display: "flex",
  },
  containerCountPageStyles: {
    padding: "0 15px 0 0",
    "@media(max-width: 600px)": {
      margin: "20px 0 0 0",
    },
  },
}));

export const CommentsLinks = () => {
  const classes = useStyles();
  const textLinkLastReview = `Последние отзывы`;
  const textLinkAllReview = `Все отзывы`;

  const [open, setOpen] = React.useState(false);
  const openLast = () => {
    setOpen(false);
  };
  const openAll = () => {
    setOpen(true);
  };
  return (
    <div className={classes.containerCommentsLinksStyles}>
      <div className={classes.containerFirstStyle}>
        <div className={classes.containerSecondStyle}>
          <div>
            <Link
              className={classes.textLinkStyles}
              onClick={openLast}
              style={{
                fontSize: open === false ? "16px" : "14px",
                fontWeight: open === false ? "700" : "400",
                textDecoration: "none",
              }}
            >
              {textLinkLastReview}
            </Link>
          </div>
          <div>
            <Link
              className={classes.textLinkStyles}
              onClick={openAll}
              style={{
                fontSize: open === false ? "14px" : "16px",
                fontWeight: open === false ? "400" : "700",
                textDecoration: "none",
              }}
            >
              {textLinkAllReview}
            </Link>
          </div>
        </div>

        <div className={classes.containerCountPageStyles}>
          <CountPage />
        </div>
      </div>

      <div>{open === false ? <CommentsLastPage /> : <CommentsPage />}</div>
    </div>
  );
};
