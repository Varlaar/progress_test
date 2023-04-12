import { useSelector } from "react-redux";
import Header from "../Header";

import styles from "./LatoutComponent.module.scss";

const LayoutComponent = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header title="логотип" />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default LayoutComponent;
