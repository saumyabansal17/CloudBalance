import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";


ReactFusioncharts.fcRoot(FusionCharts, charts,CandyTheme);

const dataSource = {
  chart: {
    caption: "Reach of Social Media Platforms amoung Adults",
    yaxisname: "% of Adults on this platform",
    subcaption: "2018-2023",
    showhovereffect: "1",
    numbersuffix: "%",
    drawcrossline: "1",
    theme: "candy",

    bgColor: "#ffffff",
    captionFontColor: "#111827",     

    numDivLines: "5",
    divLineColor: "#d1d5db",
    divLineDashed: "1",
    divLineDashLen: "4",

  legendItemFontColor: "#000000",//extra
  legendIconBorderAlpha: "100",//extra
  labelFontColor: "#111827",
  showXAxisLine: "1",
    showYAxisLine: "1",

  },
  categories: [
    {
      category: [
        {
          label: "2018"
        },
        {
          label: "2019"
        },
        {
          label: "2021"
        },
        {
          label: "2023"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Facebook",
      data: [
        {
          value: "68"
        },
        {
          value: "69"
        },
        {
          value: "69"
        },
        {
          value: "68"
        }
      ]
    },
    {
      seriesname: "Instagram",
      data: [
        {
          value: "35"
        },
        {
          value: "37"
        },
        {
          value: "40"
        },
        {
          value: "47"
        }
      ]
    },
    {
      seriesname: "LinkedIn",
      data: [
        {
          value: "25"
        },
        {
          value: "27"
        },
        {
          value: "28"
        },
        {
          value: "30"
        }
      ]
    },
    {
      seriesname: "Twitter",
      data: [
        {
          value: "24"
        },
        {
          value: "22"
        },
        {
          value: "23"
        },
        {
          value: "22"
        }
      ]
    }
  ]
};


const LineChart = () => {
  return (
      <ReactFusioncharts
        type="msline"
        width="100%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}

export default LineChart