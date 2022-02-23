import classes from "./Layout.module.css";
import SideBar from "./Sidebar/Sidebar";
import TopBar from "./TopBar/TopBar";

function Layout(props) {
  return (
    <div className={classes.layout}>
      <SideBar />
      <div className={classes.viewContainer}>
        <TopBar />
        <main>{props.children}</main>
      </div>
    </div>
  );
}

export default Layout;
