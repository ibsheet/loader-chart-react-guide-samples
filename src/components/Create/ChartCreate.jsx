import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import loader from '@ibsheet/loader';
import { useDispatch, useSelector } from 'react-redux';
import { addChart } from '../../store/chartSlice';

const IBChart = () => {
  const chartDivRef = useRef(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const createOption = useSelector((state) => state.createOption);
  const chartOptions = useSelector((state) => state.chartOptions);
  const chartData = useSelector((state) => state.chartData);
  const redraw = useSelector((state) => state.redraw);
  const dispatch = useDispatch();

  // DOM이 렌더링된 후 isReady를 true로 설정
  useLayoutEffect(() => {
    if (chartDivRef.current) {
      setIsReady(true);
    }
  }, []);

  // isReady가 true이고 createOption이 있을 때 차트 생성
  useEffect(() => {
    if (!isReady || !createOption) return;

    const createChartInstance = async () => {
      setLoading(true);
      setError(null);

      try {
        const chart = await loader.createChart({
          id: createOption.id,
          el: createOption.el,
          options: createOption.options
        });

        chart.setOptions(chartOptions);
        chart.loadSearchData(chartData, {
          append: true,
          redraw: redraw
        });

        dispatch(addChart(chart));
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to create chart';
        setError(errorMessage);
        console.error('Chart creation failed:', err);
      } finally {
        setLoading(false);
      }
    };

    createChartInstance();

    return () => {
      if (createOption?.id) {
        loader.removeChart(createOption.id);
      }
    };
  }, [isReady, createOption, chartOptions, chartData, redraw, dispatch]);

  return (
    <>
      <div id="chartDiv" ref={chartDivRef} />
      {error && (
        <div style={{ padding: '20px', color: '#dc3545', textAlign: 'center' }}>
          <p>차트를 불러오는 중 오류가 발생했습니다.</p>
          <p style={{ fontSize: '12px', color: '#6c757d' }}>{error}</p>
        </div>
      )}
      {loading && (
        <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
          차트를 불러오는 중...
        </div>
      )}
    </>
  );
};

export default IBChart;
