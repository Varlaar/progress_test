import { useSelector } from "react-redux";
import { selectBonus } from "../../store/bonus/selector";
import { normalizeBurningDate } from "../../utils";
import fire from "../../assets/images/fire.png";
import bthArrow from "../../assets/images/bthArrow.png";

import styles from "./Bonus.module.scss";

const Bonus = () => {
  const bonus = useSelector(selectBonus);
  return (
    <section className={styles.bonus}>
      <div className={styles.bonus__container}>
        <div className={styles.bonus__contentRow}>
          <h3 className={styles.bonus__bonusCount}>
            {bonus.currentQuantity} бонусов
          </h3>
          <div className={styles.bonus__content}>
            <h5 className={styles.bonus__burningDate}>
              {normalizeBurningDate(bonus.dateBurning)} сгорит
            </h5>
            <img className={styles.bonus__burningImg} src={fire} alt="fire" />
            <h5 className={styles.bonus__burningBonus}>
              {bonus.forBurningQuantity} бонусов
            </h5>
          </div>
        </div>
        <button>
          <img src={bthArrow} alt="arrow-button" />
        </button>
      </div>
    </section>
  );
};

export default Bonus;
