import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";

// Resolves charts dependancy
ReactFusioncharts.fcRoot(FusionCharts, charts,CandyTheme);

const dataSource = {
  chart: {
    caption: "Yearly Energy Production Rate",
    subcaption: " Top 5 Developed Countries",
    numbersuffix: " TWh",
    showsum: "1",
    theme: "candy",
    drawcrossline: "1",

    bgColor: "#ffffff",
    captionFontColor: "#111827",      

    numDivLines: "5",
    divLineColor: "#d1d5db",
    divLineDashed: "1",
    divLineDashLen: "4",

    plotSpacePercent: "40",//extra
    labelFontColor: "#111827",
    showXAxisLine: "1",
    showYAxisLine: "1",

  },
  categories: [
    {
      category: [
        {
          label: "Canada"
        },
        {
          label: "China"
        },
        {
          label: "Russia"
        },
        {
          label: "Australia"
        },
        {
          label: "United States"
        },
        {
          label: "France"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Coal",
      data: [
        {
          value: "400"
        },
        {
          value: "830"
        },
        {
          value: "500"
        },
        {
          value: "420"
        },
        {
          value: "790"
        },
        {
          value: "380"
        }
      ]
    },
    {
      seriesname: "Hydro",
      data: [
        {
          value: "350"
        },
        {
          value: "620"
        },
        {
          value: "410"
        },
        {
          value: "370"
        },
        {
          value: "720"
        },
        {
          value: "310"
        }
      ]
    },
    {
      seriesname: "Nuclear",
      data: [
        {
          value: "210"
        },
        {
          value: "400"
        },
        {
          value: "450"
        },
        {
          value: "180"
        },
        {
          value: "570"
        },
        {
          value: "270"
        }
      ]
    },
    {
      seriesname: "Gas",
      data: [
        {
          value: "180"
        },
        {
          value: "330"
        },
        {
          value: "230"
        },
        {
          value: "160"
        },
        {
          value: "440"
        },
        {
          value: "350"
        }
      ]
    },
    {
      seriesname: "Oil",
      data: [
        {
          value: "60"
        },
        {
          value: "200"
        },
        {
          value: "200"
        },
        {
          value: "50"
        },
        {
          value: "230"
        },
        {
          value: "150"
        }
      ]
    }
  ]
};


const ColumnChart = () => {
   return (
      <ReactFusioncharts
        type="stackedcolumn2d"
        width="100%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}

export default ColumnChart