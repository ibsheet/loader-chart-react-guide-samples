import loader from '@ibsheet/loader';
import Highcharts from 'highcharts/highstock';
import 'highcharts/highcharts-more';
import 'highcharts/modules/series-label';

// Highcharts를 전역 객체에 설정
if (typeof window !== 'undefined') window.Highcharts = Highcharts;

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

// 로더 config
loader.config({
  registry: [ibchartLib]
});
