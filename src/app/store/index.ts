import { configureStore } from "@reduxjs/toolkit";
import segmentReducer from "entities/Segment/Segment.slice";

const store = configureStore({
  reducer: {
    segments: segmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
