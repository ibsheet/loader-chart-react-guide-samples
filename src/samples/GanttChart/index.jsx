import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const GanttChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'gantt-chart',
      title: '간트 차트',
      subTitle: `간트 차트 형태로 막대차트를 표시한 예제입니다.<br>
        <b>inverted</b> 속성을 <b>true</b>로 설정할 경우 X축과 Y축이 반전됩니다.<br>
        <b>highcharts-more.js</b> 파일이 필요합니다.`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 2
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default GanttChart;
