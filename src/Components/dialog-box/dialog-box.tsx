import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDialogBox } from "../../redux/dialogbox/dialogbox.actions";
import { RootState } from "../../redux/root-reducer";
import "./dialog-box.scss";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Box } from "@mui/system";
const DialogBox = () => {
  const dispatch = useDispatch();
  const Open = useSelector((state: RootState) => state.dialog?.Open);
  const fn = useSelector((state: RootState) => state.dialog?.fn);
  const Question = useSelector((state: RootState) => state.dialog?.Question);

  const confirmButton = () => {
    fn();
    dispatch(toggleDialogBox({ Open: false, Question: "", fn: null }));
  };
  const cancelButton = () => {
    dispatch(toggleDialogBox({ Open: false, Question: "", fn: null }));
  };
  return (
    <>
      {Open ? (
        <div className="dialog">
          <div className="dialog-box">
         
              <HelpOutlineIcon />
           
            <h1 className="dialog-box__question">
              {Question}
            </h1>
            <div className="dialog-box__options">
              <span onClick={confirmButton}>YES </span>
              <span onClick={cancelButton}>NO</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DialogBox;
