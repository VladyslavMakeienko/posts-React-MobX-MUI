import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CategoryOfService } from "./Elements for Services/CategoryOfService";
import { ServicesCount } from "./Elements for Services/ServicesCount";
import { TitleServices } from "./Elements for Services/TitleServices";
import { TitleBottomServices } from "./Elements for Services/TitleBottomServices";

const useStyles = makeStyles(() => ({
  borderStyles: {
    borderBottom: "1px solid #DADADA",
    borderTop: "1px solid #DADADA",
    width: "317px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    "@media(max-width: 600px)": {
      width: "237px",
    },
  },
  containerServicesPageStyles: {
    margin: "50px 0 50px 70px",
    "@media(max-width: 600px)": {
      margin: "50px 0",
    },
  },
}));

export const ServicesPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.containerServicesPageStyles}>
      <TitleServices />
      <div className={classes.borderStyles}>
        <CategoryOfService />
        <ServicesCount />
      </div>
      <TitleBottomServices />
    </div>
  );
};
