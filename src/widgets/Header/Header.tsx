import { useState } from "react";
import { Switch } from "shared";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSwitch = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <Switch
        labelOptions={{
          text: isEnabled ? "Служба включена" : "Служба выключена",
          position: "right",
        }}
        checked={isEnabled}
        onChange={handleSwitch}
        disabled={false}
      />
    </header>
  );
};

export default Header;
