import React, { useMemo } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { getMonthsBetween } from "./utils";

ReactFusioncharts.fcRoot(FusionCharts, charts, CandyTheme);

const Chart = ({ type, data, startDate, endDate }) => {

  const dataSource = useMemo(() => {
    if (!data || data.length === 0) return null;

    const months = getMonthsBetween(startDate, endDate);

    return {
      chart: {
        caption: "Cost Trend",
        subcaption: `${startDate} to ${endDate}`,
        xaxisname: "Month",
        yaxisname: "Cost ($)",
        formatnumberscale: "1",
        theme: "candy",
        drawcrossline: "1",
        bgColor: "#ffffff",
        captionFontColor: "#111827",
        numDivLines: "5",
        divLineColor: "#d1d5db",
        divLineDashed: "1",
        divLineDashLen: "4",
        showXAxisLine: "1",
        showYAxisLine: "1",
        labelFontColor: "#111827"
      },

      categories: [
        {
          category: months.map((m) => ({ label: m }))
        }
      ],

      dataset: data.map((item) => ({
        seriesname: item.service,
        data: months.map((month) => ({
          value: item.monthlyCost[month] || 0
        }))
      }))
    };
  }, [data, startDate, endDate]);

  if (!dataSource) return null;

  return (
    <ReactFusioncharts
      type={type}
      width="100%"
      height="50%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
};

export default Chart;
