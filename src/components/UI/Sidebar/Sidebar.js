import Navigation from "../Navigation/Navigation";
import classes from "./Sidebar.module.css";
import { useState } from "react";

function Sidebar() {
  const [minimize, setMinimize] = useState(false);

  const sideBarClasses = `${classes.sidebar} ${
    minimize ? `${classes.minimized}` : `${classes.expanded}`
  }`;

  const minimizeHandler = () => {
    setMinimize(state => !state);
  };

  return (
    <aside className={sideBarClasses}>
      <Navigation isMinimized={minimize} onMinimize={minimizeHandler} />
    </aside>
  );
}

export default Sidebar;
