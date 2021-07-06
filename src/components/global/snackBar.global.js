import React from "react";
import { useSelector } from "react-redux";
// import { openSnackBar } from "../../actions/snackbar.actions";
import { SuccessSnackbar } from "./snackbars/simple.snackbar";

export const SnackBarWrapper = () => {
  const { content } = useSelector((state) => state.snackbar);
  const renderSnackBar = () => {
    switch (content.type) {
      case "success":
        return <SuccessSnackbar content={content} />;
      default:
        return null;
    }
  };
  return <>{content?.status ? renderSnackBar() : null}</>;
};