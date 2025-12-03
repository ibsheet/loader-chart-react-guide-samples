import IBSheetLoader from '@ibsheet/loader';
import Highcharts from 'highcharts/highstock';
import 'highcharts/highcharts-more';
import 'highcharts/modules/series-label';

// IBChart에서 전역 Highcharts 참조를 위해 window에 등록
window.Highcharts = Highcharts;

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

// 로더 config
IBSheetLoader.config({
  registry: [ibchartLib]
});
