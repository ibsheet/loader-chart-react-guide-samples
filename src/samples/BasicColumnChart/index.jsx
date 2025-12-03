import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const BasicColumnChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'basic-column-chart',
      title: '막대 차트',
      subTitle: `column 차트 예제입니다.<br>
        dataLabels 의 <b>enabeld</b> 속성을 <b>true</b> 로 설정하여 레이블을 표시할 수 있습니다.<br>
        dataLabels 이 Plot 영역을 벗어나는 경우, 기본적으로 해당 레이블은 표시되지 않으나, <b>overflow</b> 속성을 <b>allow</b> 로 설정하고 <b>crop</b> 속성을 <b>false</b> 로 설정하여 레이블을 표시할 수 있습니다.<br>
        legend의 <b>enabled</b> 속성을 <b>false</b> 로 설정하여 범례를 표시하지 않을 수 있습니다.(default : true)`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 1
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default BasicColumnChart;
