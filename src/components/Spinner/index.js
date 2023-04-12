import { TailSpin } from "react-loader-spinner";

import styles from "./Spinner.module.scss";

const Spinner = () => (
  <TailSpin
    height="80"
    width="80"
    color="#800080"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperClass={styles.spinner}
    visible
  />
);

export default Spinner;
