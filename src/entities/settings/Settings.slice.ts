import { createSlice } from "@reduxjs/toolkit";
import { SettingsState } from "./Settings.types";
import { Settings } from "shared/api/settings/Settings.types";
import data from "app/data.json";

const initialState: SettingsState = {
  settings: data.settings || ({} as Settings),
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    switchService(state) {
        state.settings.enabled = !state.settings.enabled;
      },
  },
});

export const settingsActions = settingsSlice.actions;
export default settingsSlice.reducer;
