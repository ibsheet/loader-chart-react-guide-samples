const createChartOption = {
  "id": "myChart",
  "el": "chartDiv",
  "options": {"width": "100%","height": "500px"}
}

const chartOptions = {
  "chart": {
    "type": "waterfall"
  },
  "subtitle": {
    "text": "2023년 월별 영업 실적",
    "align": "center",
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
    "gridLineWidth": 1,
    "lineWidth": 0
  },
  "yAxis": {
    "title": {
      "text": "단위(천만원)",
      "align": "low",
      "rotation": 0,
      "style": {
        "color": "#676767",
        "fontSize": "12px"
      },
      "x": -25
    },
    "showFirstLabel": false,
    "gridLineWidth": 0
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "format": "{y}",
        "inside": false
      },
      "shadow": false,
      "borderWidth": 0,
      "label": {
        "enabled": false
      }
    }
  },
  "legend": {
    "enabled": false
  }
}

const chartData = {
  "series": [
    {
      "upColor": "#ff6666",
      "Color": "#448EF6",
      "name": "월별 실적",
      "data": [
        120,
        569,
        -131,
        231,
        -342,
        233,
        231,
        -42,
        103,
        -131,
        -255,
        98
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
