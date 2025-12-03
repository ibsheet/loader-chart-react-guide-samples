import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const Example2Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'example2-chart',
      title: '응용 예제2 (실시간 순위)',
      subTitle: `실시간으로 순위 변동을 <b>spline</b> 차트로 시각화한 예제입니다.<br>
        yAxis의 하위 속성인 <b>reversed</b> 를 <b>true</b>로 설정하면 축을 역순으로 표시할 수 있습니다.<br>
        tooltip의 하위 속성인 <b>headerFormat,pointFormat,useHTML</b>을 이용해 툴팁을 커스터마이징 할 수 있습니다.<br>
        <b>setOptions</b>를 이용한 방법 외에도 <b>addSeries</b>이나 <b>addPoint</b>를 이용해 동적으로 차트를 그릴 수 있습니다. 사용자가 직접 사용가능한 형식으로 변경하는 방법을 확인하기 위해서는 jsFiddle 버튼을 눌러야합니다.<br>
        ※ 사용된 데이터는 멜론의 실시간 차트의 순위 정보와 앨범 썸네일입니다.`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: true,
      menuIndex: 7
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default Example2Chart;
