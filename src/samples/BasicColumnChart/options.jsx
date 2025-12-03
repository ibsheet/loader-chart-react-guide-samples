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
    "type": "column"
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
      "서울",
      "부산",
      "대구",
      "인천"
    ],
    "gridLineWidth": 1,
    "lineWidth": 0
  },
  "yAxis": {
    "title": {
      "text": "단위(만원)",
      "align": "low",
      "rotation": 0,
      "style": {
        "color": "#575757",
        "fontSize": "10px"
      },
      "x": -15
    },
    "showFirstLabel": false,
    "tickInterval": 5,
    "gridLineWidth": 0,
    "max": 35
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
        "format": "{y}만원"
      },
      "shadow": false
    }
  },
  "legend": {
    "align": "center",
    "borderWidth": 0.5,
    "backgroundColor": "#FFFFFF",
    "shadow": false
  },
  "tooltip": {
    "valueSuffix": "만원"
  }
}

const chartData = {
  "series": [
    {
      "name": "주거비",
      "data": [
        13,
        8,
        7,
        7
      ]
    },
    {
      "name": "주거관리비",
      "data": [
        15,
        15,
        15,
        19
      ]
    },
    {
      "name": "교통비",
      "data": [
        22,
        29,
        29,
        31
      ]
    },
    {
      "name": "통신비",
      "data": [
        15,
        16,
        17,
        20
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
