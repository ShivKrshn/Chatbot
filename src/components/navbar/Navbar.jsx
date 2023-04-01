import "./navbar.scss";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useContext } from "react";
import { DarkmodeContext } from "../../context/DarkmodeContext";

const Navbar = () => {
  const { darkmode, Toggle } = useContext(DarkmodeContext);
  return (
    <div className="navbar">
      <div className="left">
        <KeyboardBackspaceOutlinedIcon fontSize="small" />
        <span className="logo">ChatBot</span>
      </div>
      <div className="right">
        {darkmode ? (
          <LightModeOutlinedIcon fontSize="small" onClick={Toggle} />
        ) : (
          <DarkModeOutlinedIcon fontSize="small" onClick={Toggle} />
        )}
        <HelpOutlineOutlinedIcon fontSize="small" />
      </div>
    </div>
  );
};

export default Navbar;
