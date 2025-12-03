import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const BasicAreaChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'basic-area-chart',
      title: '영역 차트',
      subTitle: `area 차트 예제입니다.<br>
        <b>series-labels.js</b> 포함된 경우, <b>series.label.enabled</b> 속성을 이용하여 시리즈명을 표시하지 않을 수 있습니다.`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 5
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default BasicAreaChart;
