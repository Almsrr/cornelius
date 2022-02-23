import classes from "./Navigation.module.css";
import "./Navigation.css";

function Navigation(props) {
  if (props.isMinimized) {
    return (
      <nav>
        <ul className={classes.navList}>
          <li onClick={props.onMinimize}>{"->"}</li>
          <li className={classes.navItem}>
            <span className="nav-link">1</span>
            <p className="nav-link__detail">1 LINK</p>
          </li>
          <li className={classes.navItem}>
            <span className="nav-link">2</span>
            <p className="nav-link__detail">2 LINK</p>
          </li>
          <li className={classes.navItem}>
            <span className="nav-link">3</span>
            <p className="nav-link__detail">3 LINK</p>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul className={classes.navList}>
        <li onClick={props.onMinimize}>{"<-"}</li>
        <li className={classes.navItem}>1 LINK</li>
        <li className={classes.navItem}>2 LINK</li>
        <li className={classes.navItem}>3 LINK</li>
      </ul>
    </nav>
  );
}

export default Navigation;
