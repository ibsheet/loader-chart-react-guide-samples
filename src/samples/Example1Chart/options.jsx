const createChartOption = {
  "id": "myChart",
  "el": "chartDiv",
  "options": {"width": "100%","height": "400px"}
}

const chartOptions = {
  "colors": [
    "#448EF6",
    "#75C2F6",
    "#65DAF7",
    "#A7EFE9",
    "#2FE1D6"
  ],
  "chart": {
    "type": "column"
  },
  "subtitle": {
    "text": "대통령 선거 투표율(2002~2022)",
    "align": "center",
    "style": {
      "color": "#242424"
    }
  },
  "xAxis": {
    "categories": [
      "2002",
      "2007",
      "2012",
      "2017",
      "2022"
    ],
    "gridLineWidth": 2,
    "lineWidth": 1
  },
  "yAxis": {
    "title": {
      "text": "단위(%)",
      "align": "low",
      "rotation": 0,
      "style": {
        "color": "#575757",
        "fontSize": "10px"
      }
    },
    "showFirstLabel": false,
    "tickInterval": 20,
    "max": 100
  },
  "plotOptions": {
    "series": {
      "dataLabels": {
        "enabled": true,
        "format": "{y}%"
      },
      "shadow": false,
      "colorByPoint": true,
      "pointWidth": 70
    }
  },
  "legend": {
    "enabled": false
  },
  "tooltip": {
    "valueSuffix": "%"
  }
}

const chartData = {
  "series": [
    {
      "name": "대선 투표율",
      "data": [
        {
          "name": "2002",
          "y": 70.8
        },
        {
          "name": "2007",
          "y": 63
        },
        {
          "name": "2012",
          "y": 75.8
        },
        {
          "name": "2017",
          "y": 77.2
        },
        {
          "name": "2022",
          "y": 77.1
        }
      ]
    }
  ]
}

export { createChartOption, chartOptions, chartData };
