import { useState } from "react";
import { Switch } from "shared/ui";

const SwitchServices: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const handleSwitch = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <Switch
      labelOptions={{
        text: isEnabled ? "Служба включена" : "Служба выключена",
        position: "right",
      }}
      checked={isEnabled}
      onChange={handleSwitch}
      disabled={true}
    />
  );
};

export default SwitchServices;
