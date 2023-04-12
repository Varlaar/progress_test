import info from "../../assets/images/info.png";

import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <section className={styles.header}>
      <div className={styles.header__container}>
        <h3 className={styles.header__logo}>{props.title}</h3>
        <button>
          <img src={info} alt="info" />
        </button>
      </div>
    </section>
  );
};

export default Header;
