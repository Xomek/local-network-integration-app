import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SegmentState } from "./Segment.types";
import { Settings } from "shared/types";
import data from "app/data.json";

const initialState: SegmentState = {
  segments: data.interfaces || [],
  segmentForms: [],
  settings: data.settings || ({} as Settings),
};

const segmentSlice = createSlice({
  name: "segment",
  initialState,
  reducers: {
    switchService(state) {
      state.settings.enabled = !state.settings.enabled;
    },

    addSegment(state) {
      state.segmentForms.push({ ip: "", port: "" });
    },

    closeSegmentForm(state, action: PayloadAction<number>) {
      state.segmentForms = state.segmentForms.filter(
        (_, index) => index !== action.payload
      );
    },

    saveSegment(state, action: PayloadAction<{ ip: string; port: string }>) {
      state.segments.push({
        address: action.payload.ip,
        mask: action.payload.port,
        class: "",
        duplex: "",
        id: "",
        parent_id: "",
        speed: "",
        type: "",
      });
    },

    saveLocalSegment(state, action: PayloadAction) {},

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
