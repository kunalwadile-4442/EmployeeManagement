// weekDefinitionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    week_day: {
      sunday: { a: true, b: true, c: true, d: true, e: true },
      monday: { a: false, b: false, c: false, d: false, e: false },
      tuesday: { a: false, b: false, c: false, d: false, e: false },
      wednesday: { a: false, b: false, c: false, d: false, e: false },
      thursday: { a: false, b: false, c: false, d: false, e: false },
      friday: { a: false, b: false, c: false, d: false, e: false },
      saturday: { a: false, b: true, c: false, d: true, e: false },
    },
    startDate: "2025-01-01", // Corrected startDate format
    endDate: "2025-12-31", // Corrected endDate format
  };

const weekDefinitionSlice = createSlice({
  name: "weekDefinition",
  initialState,
  reducers: {
    toggleDay(state, action) {
      const { day, type } = action.payload;
      state.week_day[day][type] = !state.week_day[day][type];
    },
    toggleAllForDay(state, action) {
      const day = action.payload;
      const allChecked = Object.values(state.week_day[day]).every((val) => val);
      Object.keys(state.week_day[day]).forEach(
        (key) => (state.week_day[day][key] = !allChecked)
      );
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
  },
});

export const { toggleDay, toggleAllForDay, setStartDate, setEndDate } =
  weekDefinitionSlice.actions;
export default weekDefinitionSlice.reducer;