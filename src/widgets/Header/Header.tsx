import { SwitchServices } from "features";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <SwitchServices />
    </header>
  );
};

export default Header;
