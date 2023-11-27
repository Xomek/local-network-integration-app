import { Switch } from "shared/ui";
import { useAppSelector } from "app/store/hooks";
import { useActions } from "shared/lib/hooks/useActions";

const SwitchService: React.FC = () => {
  const { settings } = useAppSelector((state) => state.settings);
  const { switchService } = useActions();

  return (
    <Switch
      labelOptions={{
        text: settings.enabled ? "Служба включена" : "Служба выключена",
        position: "right",
      }}
      checked={settings.enabled}
      onChange={switchService}
      disabled={false}
    />
  );
};

export default SwitchService;
