import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "entities/settings/Settings.slice";
import segmentReducer from "entities/segment/Segment.slice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    segments: segmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
