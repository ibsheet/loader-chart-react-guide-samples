import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const Example1Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'example1-chart',
      title: '응용 예제1 (선거투표율)',
      subTitle: `<b>column</b> 차트로 대선 투표율을 시각화한 예제입니다.<br>
        series 는 하나의 색상을 갖지만, series 에 <b>colorByPoint</b> 설정하여 <b>point</b> 별로 다른 색상을 표시할 수 있습니다.<br>
        x측 레이블은 xAxis의 categories 로 설정하지 않고, 조회 데이타와 연동하도록 <b>xAxis</b>의 <b>type:category</b> 를 설정 하였습니다.<br>
        dataLabels의 <b>inside</b> 속성으로 <b>true</b> 로 설정하여 막대 안쪽에 데이타값이 표시됩니다.`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 6
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default Example1Chart;
