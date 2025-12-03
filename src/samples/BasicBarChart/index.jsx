import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const BasicBarChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'basic-bar-chart',
      title: '바 차트',
      subTitle: `bar 차트 예제입니다.<br>
        dataLabels의 <b>enabled</b> 속성을 <b>true</b> 로 설정하면 차트에 데이타값이 표시됩니다.<br>
        legend의 <b>enabled</b> 속성을 <b>false</b> 로 설정하여 범례를 표시하지 않을 수 있습니다.(default : true)`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 0
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default BasicBarChart;
