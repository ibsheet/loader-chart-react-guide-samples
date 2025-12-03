import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const WaterfallChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'waterfall-chart',
      title: '폭포 차트',
      subTitle: `조회데이터를 쌓아 올리면서 값에 따라 위/아래 방향에 표시할 수 있습니다.<br>
        series 의 <b>upColor</b> 와 <b>color</b> 를 설정하면, 증가/감소에 대한 색상을 설정할 수 있습니다.<br>
        <b>highcharts-more.js</b> 파일이 필요합니다.`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 3
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default WaterfallChart;
