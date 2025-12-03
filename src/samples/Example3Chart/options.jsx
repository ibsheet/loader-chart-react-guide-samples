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
    "type": "spline"
  },
  "xAxis": {
    "type": "datetime",
    "showFirstLabel": false
  },
  "yAxis": {
    "title": {
      "text": "풍속 (m/s)",
      "align": "low",
      "rotation": 0,
      "style": {
        "color": "#575757",
        "fontSize": "10px"
      },
      "x": -20
    },
    "showFirstLabel": false,
    "min": 0,
    "minorGridLineWidth": 0,
    "gridLineWidth": 0,
    "alternateGridColor": null,
    "plotBands": [
      {
        "from": 0.3,
        "to": 1.5,
        "color": "rgba(68, 170, 213, 0.1)",
        "label": {
          "text": "실바람",
          "style": {
            "color": "#606060",
            "fontWeight": "bold"
          }
        }
      },
      {
        "from": 1.5,
        "to": 3.3,
        "color": "rgba(0, 0, 0, 0)",
        "label": {
          "text": "남실바람",
          "style": {
            "color": "#606060",
            "fontWeight": "bold"
          }
        },
        "zIndex": 5
      },
      {
        "from": 3.3,
        "to": 5.5,
        "color": "rgba(68, 170, 213, 0.1)",
        "label": {
          "text": "산들바람",
          "style": {
            "color": "#606060",
            "fontWeight": "bold"
          }
        }
      },
      {
        "from": 5.5,
        "to": 8,
        "color": "rgba(0, 0, 0, 0)",
        "label": {
          "text": "건들바람",
          "style": {
            "color": "#606060",
            "fontWeight": "bold"
          }
        },
        "zIndex": 5
      },
      {
        "from": 8,
        "to": 11,
        "color": "rgba(68, 170, 213, 0.1)",
        "label": {
          "text": "흔들바람",
          "style": {
            "color": "#606060",
            "fontWeight": "bold"
          }
        }
      },
      {
        "from": 11,
        "to": 14,
        "color": "rgba(0, 0, 0, 0)",
        "label": {
          "text": "된바람",
          "style": {
            "color": "#606060",
            "fontWeight": "bold"
          }
        }
      }
    ]
  },
  "plotOptions": {
    "spline": {
      "lineWidth": 4,
      "states": {
        "hover": {
          "lineWidth": 5
        }
      },
      "marker": {
        "enabled": false
      },
      "pointInterval": 3600000,
      "pointStart": 1714521600000
    }
  },
  "legend": {
    "align": "center",
    "borderWidth": 0,
    "backgroundColor": "#FFFFFF",
    "shadow": false
  },
  "tooltip": {
    "valueSuffix": " m/s"
  }
}

const chartData = {
  "ibchart": {
    "data": [
      {
        "series": [
          {
            "seriesName": "서울",
            "value": 2.3
          },
          {
            "seriesName": "백령도",
            "value": 6.9
          },
          {
            "seriesName": "서귀포",
            "value": 1.1
          }
        ]
      },
      {
        "series": [
          1.8,
          5.8,
          1.1
        ]
      },
      {
        "series": [
          1.1,
          6.5,
          0.4
        ]
      },
      {
        "series": [
          1,
          5.1,
          1.4
        ]
      },
      {
        "series": [
          0.2,
          6.7,
          0.9
        ]
      },
      {
        "series": [
          2.2,
          6.3,
          1.2
        ]
      },
      {
        "series": [
          1.4,
          4.8,
          1.4
        ]
      },
      {
        "series": [
          4.3,
          5.6,
          0
        ]
      },
      {
        "series": [
          1.8,
          5.5,
          1.1
        ]
      },
      {
        "series": [
          2.8,
          7.7,
          1.5
        ]
      },
      {
        "series": [
          2.3,
          5.5,
          1.1
        ]
      },
      {
        "series": [
          2.6,
          6.4,
          1.2
        ]
      },
      {
        "series": [
          2.6,
          7.5,
          1.7
        ]
      },
      {
        "series": [
          2.4,
          9.5,
          1.8
        ]
      },
      {
        "series": [
          2.6,
          8.7,
          2.4
        ]
      },
      {
        "series": [
          3.2,
          6.6,
          1.2
        ]
      },
      {
        "series": [
          2.6,
          5.9,
          1
        ]
      },
      {
        "series": [
          2.9,
          5.9,
          0.3
        ]
      },
      {
        "series": [
          2.2,
          5,
          0.8
        ]
      },
      {
        "series": [
          3.1,
          5.6,
          1
        ]
      },
      {
        "series": [
          2.4,
          4,
          0.6
        ]
      },
      {
        "series": [
          1.5,
          4.9,
          1.9
        ]
      },
      {
        "series": [
          2.2,
          3.2,
          1.1
        ]
      },
      {
        "series": [
          1.1,
          2,
          0.4
        ]
      }
    ]
  }
}

export { createChartOption, chartOptions, chartData };
