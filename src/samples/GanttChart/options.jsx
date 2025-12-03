const createChartOption = {
  "id": "myChart",
  "el": "chartDiv",
  "options": {"width": "100%","height": "500px"}
}

const chartOptions = {
  "colors": [
    {
      "linearGradient": {"x1": 0,"x2": 0,"y1": 0,"y2": 1},
      "stops": [
        [0, "#ff6666"],
        [1, "#448EF6"]
      ]
    }
  ],
  "chart": {
    "type": "columnrange",
    "inverted": true
  },
  "subtitle": {
    "text": "기상청 서울 2023년 기온분석 자료",
    "align": "left",
    "style": {
      "color": "#242424"
    }
  },
  "xAxis": {
    "categories": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    "gridLineWidth": 1,
    "lineWidth": 0
  },
  "yAxis": {
    "title": {
      "text": "단위(°C)",
      "align": "high",
      "style": {
        "color": "#676767",
        "fontSize": "12px"
      }
    },
    "tickInterval": 5,
    "gridLineWidth": 0
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "allowOverlap": true,
        "format": "{y}°C"
      },
      "shadow": false,
      "borderRadius": 10
    }
  },
  "legend": {
    "enabled": false
  },
  "tooltip": {
    "formatter": function(ev) {
      return '<b>'+ev.point.category+'</b><br>최소기온: ' + ev.point.options.low + '°C ~ 최고기온: ' + ev.point.options.high + '°C';
    }
  }
}

const chartData = {
  "series": [
    {
      "data": [
        [-17.3,12.5],
        [-5.3,12.4],
        [-1.9,25.1],
        [3.1,28.4],
        [7.9,31.2],
        [16.6,34.0],
        [21.6,34.9],
        [20.8,35.8],
        [15.2,32.8],
        [5.4,24.6],
        [-7.3,25.9],
        [-14.7,16.8]
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
