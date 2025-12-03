const createChartOption = {
  "id": 'myChart',
  "el": 'chartDiv',
  "options": {"width": "100%","height": "400px"}
}

const chartOptions = {
  "colors": [
    "#448EF6",
    "#75C2F6",
    "#65DAF7",
    "#A7EFE9"
  ],
  "chart": {
    "type": "bar"
  },
  "subtitle": {
    "text": "통계청 항목별 월평균 가구지출(2022)",
    "align": "left",
    "style": {
      "color": "#242424"
    }
  },
  "xAxis": {
    "categories": [
      "주거비",
      "주거관리비",
      "교통비",
      "통신비"
    ],
    "gridLineWidth": 1,
    "lineWidth": 0
  },
  "yAxis": {
    "title": {
      "text": "단위(만원)",
      "align": "high",
      "style": {
        "color": "#575757",
        "fontSize": "10px"
      }
    },
    "tickInterval": 3,
    "gridLineWidth": 0
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true
      },
      "shadow": false,
      "pointWidth": 15,
      "pointPadding": 0.3,
      "groupPadding": 0.1
    }
  },
  "legend": {
    "layout": "vertical",
    "align": "right",
    "verticalAlign": "top",
    "x": -60,
    "y": 30,
    "floating": true,
    "borderWidth": 0,
    "backgroundColor": "#FFFFFF",
    "shadow": true
  },
  "tooltip": {
    "valueSuffix": "만원"
  }
}

const chartData = {
  "series": [
    {
      "name": "서울",
      "data": [
        13,
        15,
        22,
        15
      ]
    },
    {
      "name": "부산",
      "data": [
        8,
        15,
        29,
        16
      ]
    },
    {
      "name": "대구",
      "data": [
        7,
        20,
        29,
        17
      ]
    },
    {
      "name": "인천",
      "data": [
        7,
        15,
        31,
        20
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
