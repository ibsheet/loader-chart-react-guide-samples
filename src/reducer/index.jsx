// init
export const CREATE_CHART = 'CREATE_CHART';
export const CREATE_SAMPLE = 'CREATE_SAMPLE';
export const REMOVE_SAMPLE = 'REMOVE_SAMPLE';

const initalState = {
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

// sample, chart action
const createSample = (name, title, subTitle, createOption, chartOptions, chartData, redraw, menuIndex) => {
  return {
    type: CREATE_SAMPLE,
    name,
    title,
    subTitle,
    createOption,
    chartOptions,
    chartData,
    redraw,
    menuIndex
  }
};

const removeSample = () => {
  return {
    type: REMOVE_SAMPLE
  }
};

const createChart = chart => {
  return {
    type: CREATE_CHART,
    chart
  }
};

// reducer
const reducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_CHART:
      return {
        ...state,
        chart: [...state.chart, action.chart]
      };
    case CREATE_SAMPLE:
      return {
        ...state,
        name: action.name,
        title: action.title,
        subTitle: action.subTitle,
        createOption: action.createOption,
        chartOptions: action.chartOptions,
        chartData: action.chartData,
        redraw: action.redraw,
        menuIndex: action.menuIndex
      };
    case REMOVE_SAMPLE:
      return {
        ...state,
        name: null,
        title: null,
        subTitle: null,
        createOption: null,
        chartOptions: null,
        chartData: null,
        redraw: false,
        chart: [],
        menuIndex: null
      };
    default:
      return state;
  }
};

export default reducer;
export { createSample, removeSample, createChart };