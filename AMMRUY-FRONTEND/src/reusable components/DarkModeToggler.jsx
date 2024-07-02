import React, { useEffect } from "react";
// import { Icon } from "@iconify/react"   ;
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
//redux
import { useSelector, useDispatch } from "react-redux";
//Actions
import { toggleDarkMode } from "../Redux/slices/themeSlice";
const DarkModeToggler = () => {
  const {mode} = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  const toggleModeHandler = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div>
        <IconButton className="top-[-1px] right-[-0.5rem]" aria-label="darkMode" size="large" onClick={toggleModeHandler} >
          <DarkModeIcon className="text-white"/>
        </IconButton>
    </div>
  );
};
export default DarkModeToggler;