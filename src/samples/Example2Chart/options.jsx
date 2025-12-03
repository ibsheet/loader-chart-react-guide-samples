const createChartOption = {
  "id": "myChart",
  "el": "chartDiv",
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
    "type": "spline"
  },
  "yAxis": {
    "title": {
      "text": ""
    },
    "reversed": true,
    "labels": {
      "enabled": false
    },
    "offset": 30,
    "lineColor": "#ffffff"
  },
  "legend": {
    "enabled": false
  },
  "tooltip": {
    "enabled": true,
    "headerFormat": "<b>{point.y}위</b><br/>",
    "pointFormat": "{series.name}",
    "useHTML": true
  }
}

const chartData = {
  "week": [
    {
      "day": "04/26",
      "hour": "0"
    },
    {
      "day": "04/26",
      "hour": "1"
    },
    {
      "day": "04/26",
      "hour": "2"
    },
    {
      "day": "04/26",
      "hour": "3"
    },
    {
      "day": "04/26",
      "hour": "4"
    },
    {
      "day": "04/26",
      "hour": "5"
    },
    {
      "day": "04/26",
      "hour": "6"
    },
    {
      "day": "04/26",
      "hour": "7"
    },
    {
      "day": "04/26",
      "hour": "8"
    },
    {
      "day": "04/26",
      "hour": "9"
    },
    {
      "day": "04/26",
      "hour": "10"
    },
    {
      "day": "04/26",
      "hour": "11"
    },
    {
      "day": "04/26",
      "hour": "12"
    },
    {
      "day": "04/26",
      "hour": "13"
    },
    {
      "day": "04/26",
      "hour": "14"
    },
    {
      "day": "04/26",
      "hour": "15"
    },
    {
      "day": "04/26",
      "hour": "16"
    },
    {
      "day": "04/26",
      "hour": "17"
    },
    {
      "day": "04/26",
      "hour": "18"
    },
    {
      "day": "04/26",
      "hour": "19"
    },
    {
      "day": "04/26",
      "hour": "20"
    },
    {
      "day": "04/26",
      "hour": "21"
    },
    {
      "day": "04/26",
      "hour": "22"
    },
    {
      "day": "04/26",
      "hour": "23"
    }
  ],
  "song": [
    {
      "artistName": "지코 (ZICO)",
      "songName": "SPOT! (feat. JENNIE)",
      "thumnail": "https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/imgs/albumart/Album_ZICO.jpg",
      "rankWeek": [
        [
          20,
          3
        ],
        [
          21,
          2
        ],
        [
          22,
          2
        ],
        [
          23,
          2
        ]
      ]
    },
    {
      "artistName": "아일릿(ILLIT)",
      "songName": "Magnetic",
      "thumnail": "https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/imgs/albumart/Album_ILLIT.jpg",
      "rankWeek": [
        [
          0,
          1
        ],
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          13,
          1
        ],
        [
          14,
          1
        ],
        [
          15,
          1
        ],
        [
          16,
          1
        ],
        [
          17,
          1
        ],
        [
          18,
          1
        ],
        [
          19,
          1
        ],
        [
          20,
          1
        ],
        [
          21,
          1
        ],
        [
          22,
          1
        ],
        [
          23,
          1
        ]
      ]
    },
    {
      "artistName": "QWER",
      "songName": "고민중독",
      "thumnail": "https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/imgs/albumart/Album_QWER.jpg",
      "rankWeek": [
        [
          0,
          3
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          12,
          4
        ],
        [
          13,
          4
        ],
        [
          14,
          4
        ],
        [
          15,
          4
        ],
        [
          16,
          4
        ],
        [
          17,
          4
        ],
        [
          18,
          4
        ],
        [
          19,
          4
        ],
        [
          23,
          4
        ]
      ]
    },
    {
      "artistName": "(여자)아이들",
      "songName": "나는 아픈 건 딱 질색이니까",
      "thumnail": "https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/imgs/albumart/Album_(G)I-DLE.jpg",
      "rankWeek": [
        [
          0,
          2
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ],
        [
          13,
          2
        ],
        [
          14,
          2
        ],
        [
          15,
          2
        ],
        [
          16,
          2
        ],
        [
          17,
          2
        ],
        [
          18,
          2
        ],
        [
          19,
          2
        ],
        [
          20,
          2
        ],
        [
          21,
          3
        ],
        [
          22,
          3
        ],
        [
          23,
          3
        ]
      ]
    },
    {
      "artistName": "TWS (투어스)",
      "songName": "첫 만남은 계획대로 되지 않아",
      "thumnail": "https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/imgs/albumart/Album_TWS.jpg",
      "rankWeek": [
        [
          0,
          4
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          8,
          4
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          12,
          3
        ],
        [
          13,
          3
        ],
        [
          14,
          3
        ],
        [
          15,
          3
        ],
        [
          16,
          3
        ],
        [
          17,
          3
        ],
        [
          18,
          3
        ],
        [
          19,
          3
        ],
        [
          20,
          4
        ],
        [
          21,
          4
        ],
        [
          22,
          4
        ]
      ]
    }
  ]
}

const tmpData = {
  "xAxis": {
    "categories": []
  },
  "series": []
},
weekLen = chartData.week.length,
songLen = chartData.song.length;

for (var i = 0; i < weekLen; i++) {
  tmpData.xAxis.categories[i] = chartData.week[i].day + " " + chartData.week[i].hour + "시";
}

for (var x = 0; x < songLen; x++) {
  tmpData.series[x] = {
    "name": chartData.song[x].artistName + " - " + chartData.song[x].songName,
    "data": [],
    "shadow":false
  };
  var reRank = false,
    rankLen = chartData.song[x].rankWeek.length;

  for (var y = 0; y < rankLen; y++) {
    var dataWeek = chartData.song[x].rankWeek[y][0];
    var dataRank = chartData.song[x].rankWeek[y][1];
    if (dataRank > 0 && dataRank > 4) {
      dataRank = null;
    }

    if (y === 0 || reRank) {
      tmpData.series[x].data[y] = {
        "x": dataWeek,
        "y": dataRank,
        "marker": {
          "symbol": "url(" + chartData.song[x].thumnail + ")"
        }
      };
      reRank = false;
    } else {
      tmpData.series[x].data[y] = {
        "x": dataWeek,
        "y": dataRank
      };
    }

    if (dataRank === null) {
      reRank = true;
    }
  }
}

export { createChartOption, chartOptions, tmpData as chartData };
