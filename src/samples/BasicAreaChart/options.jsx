const createChartOption = {
  "id": 'myChart',
  "el": 'chartDiv',
  "options": {"width": "100%","height": "500px"}
}

const chartOptions = {
  "colors": [
    "#7b75fa",
    "#3CB371",
    "#4169E1",
    "#87CEEB",
    "#00CED1"
  ],
  "chart": {
    "type": "area"
  },
  "subtitle": {
    "text": "제품별 월간 매출 실적",
    "align": "left",
    "style": {
      "color": "#242424"
    }
  },
  "xAxis": {
    "categories": [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    "gridLineWidth": 1
  },
  "yAxis": {
    "title": {
      "text": "단위(억원)",
      "align": "low",
      "rotation": 0,
      "style": {
        "color": "#575757",
        "fontSize": "10px"
      },
      "x": -15
    },
    "showFirstLabel": false
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
      },
      "shadow": false,
      "fillOpacity": 0.2,
      "label": {
        "enabled": false
      }
    }
  },
  "legend": {
    "align": "center",
    "borderWidth": 0.5,
    "backgroundColor": "#FFFFFF",
    "shadow": false
  },
  "tooltip": {
    "valuePrefix": "약 ",
    "valueSuffix": "억원"
  }
}

const chartData = {
  "series": [
    {
      "name": "태블릿",
      "data": [
        10,
        9,
        11,
        14,
        14,
        12,
        13,
        10,
        11,
        12,
        13,
        11
      ]
    },
    {
      "name": "데스크탑",
      "data": [
        15,
        13,
        17,
        18,
        20,
        16,
        14,
        21,
        19,
        21,
        22,
        23
      ]
    },
    {
      "name": "노트북",
      "data": [
        21,
        23,
        20,
        21,
        22,
        23,
        21,
        21,
        18,
        22,
        24,
        26
      ]
    },
    {
      "name": "스마트폰",
      "data": [
        29,
        20,
        35,
        40,
        32,
        38,
        34,
        30,
        29,
        31,
        29,
        30
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
