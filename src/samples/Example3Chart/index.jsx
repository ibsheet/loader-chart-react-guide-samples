import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSample, removeSample } from '../../store/chartSlice';
import { createChartOption, chartOptions, chartData } from './options';
import Content from '../../components/View/Content';

const Example3Chart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createSample({
      name: 'example3-chart',
      title: '응용 예제3 (풍속)',
      subTitle: `풍속과 풍속의 따른 명칭을 <b>spline</b> 차트로 시각화한 예제입니다.<br>
        yAxis의 하위 속성인 <b>min</b>으로 최솟값을 지정할 수 있고 <b>minorGridLine,Width,gridLineWidth,alternateGridColor</b> 등으로 y축의 스타일을 변경할 수 있습니다. <br>
        또, <b>plotBands</b>을 이용하여 구간별 하이라이트를 지정할 수 있습니다. <br>
        tooltip의 하위 속성인 <b>valueSuffix</b>를 이용하면 <b>{point.y}</b> 또는 <b>{point.value}</b>의 값 뒤에 문자열을 붙일 수 있습니다. <br>
        plotOptions의 하위 속성(<b>lineWidth, states, marker, pointInterval, pointStart</b>)을 이용해 선의 굵기, 마커 비활성화, categories 설정할 수 있습니다. <br>
        xAxis의 type을 <b>'datetime'</b>으로 설정하고 <b>pointStart</b>를 Date.UTC(YYYY, M, D, h, m, s)로 <b>pointInterval</b>를 3600000으로 설정하면 자동으로 YYYY년 M월 D일 h:m:s부터 1시간마다 자동으로 날짜를 할당할 수 있습니다.<br>
        ※ 예제에 사용된 대한민국 도시 데이터는 기상청 - 날씨누리 지역별상세관측자료 를 참고했습니다.`,
      createOption: createChartOption,
      chartOptions,
      chartData,
      redraw: false,
      menuIndex: 8
    }));

    return () => {
      dispatch(removeSample());
    };
  }, [dispatch]);

  return <Content />;
};

export default Example3Chart;
