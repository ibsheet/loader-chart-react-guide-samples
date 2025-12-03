import React from 'react';
import { useParams } from 'react-router-dom';
import { route } from './Routes';
import Home from '../../samples/Home';

// 차트 컴포넌트 임포트
import BasicBarChart from '../../samples/BasicBarChart';
import BasicColumnChart from '../../samples/BasicColumnChart';
import GanttChart from '../../samples/GanttChart';
import WaterfallChart from '../../samples/WaterfallChart';
import BasicLineChart from '../../samples/BasicLineChart';
import BasicAreaChart from '../../samples/BasicAreaChart';
import Example1Chart from '../../samples/Example1Chart';
import Example2Chart from '../../samples/Example2Chart';
import Example3Chart from '../../samples/Example3Chart';

const matchRoute = idx => {
  switch (route[idx] && route[idx].name) {
    case 'basic-bar-chart':
      return <BasicBarChart />;
    case 'basic-column-chart':
      return <BasicColumnChart />;
    case 'gantt-chart':
      return <GanttChart />;
    case 'waterfall-chart':
      return <WaterfallChart />;
    case 'basic-line-chart':
      return <BasicLineChart />;
    case 'basic-area-chart':
      return <BasicAreaChart />;
    case 'example1-chart':
      return <Example1Chart />;
    case 'example2-chart':
      return <Example2Chart />;
    case 'example3-chart':
      return <Example3Chart />;
    default:
      return <Home />;
  }
}

const Navigation = () => {
  const { name } = useParams();
  const index = route.findIndex(element => element.name === name);

  return (
    <>
      { matchRoute(index) }
    </>
  )
}

export default Navigation;
