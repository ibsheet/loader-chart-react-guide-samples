const createChartOption = {
  "id": 'myChart',
  "el": 'chartDiv',
  "options": {"width": "100%","height": "400px"}
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
    "type": "line"
  },
  "subtitle": {
    "text": "기상청 국가별 월별 최고기온(1991~2020 평균치)",
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
      "text": "단위(℃)",
      "align": "low",
      "rotation": 0,
      "style": {
        "color": "#575757",
        "fontSize": "10px"
      }
    },
    "showFirstLabel": false
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": false
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
    "valueSuffix": "℃"
  }
}

const chartData = {
  "series": [
    {
      "name": "대한민국",
      "data": [
        2.1,
        5.1,
        11,
        17.9,
        23.6,
        27.6,
        29,
        30,
        26.2,
        20.2,
        11.9,
        4.2
      ]
    },
    {
      "name": "뉴질랜드",
      "data": [
        21.2,
        21.3,
        19.8,
        17.4,
        15.2,
        13.1,
        12.3,
        12.9,
        14.5,
        15.8,
        17.5,
        19.6
      ]
    },
    {
      "name": "노르웨이",
      "data": [
        -1.8,
        -0.9,
        3.5,
        9.1,
        15.8,
        20.4,
        21.5,
        20.1,
        15.1,
        9.3,
        3.2,
        -0.5
      ]
    },
    {
      "name": "싱가포르",
      "data": [
        30.6,
        31.5,
        32.2,
        32.4,
        32.3,
        31.9,
        31.4,
        31.4,
        31.6,
        31.8,
        31.2,
        30.5
      ]
    },
    {
      "name": "미국",
      "data": [
        5.8,
        8,
        13.1,
        19.3,
        23.9,
        28.8,
        31.1,
        30.3,
        26.3,
        20.1,
        14.2,
        7.8
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
