import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SegmentState } from "./Segment.types";
import { Settings } from "shared/types";
import data from "app/data.json";

const initialState: SegmentState = {
  segments: data.interfaces || [],
  settings: data.settings || ({} as Settings),
};

const segmentSlice = createSlice({
  name: "segment",
  initialState,
  reducers: {
    switchService(state) {
      state.settings.enabled = !state.settings.enabled;
    },

    editSegment(state, action: PayloadAction) {},

    deleteSegment(state, action: PayloadAction<string>) {
      state.segments = state.segments.filter(
        (segment) => segment.id !== action.payload
      );
    },
  },
});

export const segmentActions = segmentSlice.actions;
export default segmentSlice.reducer;
