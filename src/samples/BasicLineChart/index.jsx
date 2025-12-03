import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const BasicLineChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'basic-line-chart',
      title: '꺾은선 차트',
      subTitle: `line 차트 예제입니다.<br>
        <b>series-label.js</b> 추가하면 각 시리즈명이 차트에 표시됩니다. (line, area 차트만 표시가능)`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 4
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default BasicLineChart;
