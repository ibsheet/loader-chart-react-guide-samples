import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: '',
  subTitle: '',
  name: '',
  chart: [],
  createOption: null,
  chartOptions: null,
  chartData: null,
  redraw: false,
  menuIndex: null
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    createSample: (state, action) => {
      const { name, title, subTitle, createOption, chartOptions, chartData, redraw, menuIndex } = action.payload;
      state.name = name;
      state.title = title;
      state.subTitle = subTitle;
      state.createOption = createOption;
      state.chartOptions = chartOptions;
      state.chartData = chartData;
      state.redraw = redraw;
      state.menuIndex = menuIndex;
    },
    removeSample: (state) => {
      state.name = null;
      state.title = null;
      state.subTitle = null;
      state.createOption = null;
      state.chartOptions = null;
      state.chartData = null;
      state.redraw = false;
      state.chart = [];
      state.menuIndex = null;
    },
    addChart: (state, action) => {
      state.chart.push(action.payload);
    }
  }
});

export const { createSample, removeSample, addChart } = chartSlice.actions;
export default chartSlice.reducer;
