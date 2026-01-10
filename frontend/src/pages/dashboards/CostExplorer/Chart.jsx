import React from 'react'
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import CandyTheme from "fusioncharts/themes/fusioncharts.theme.candy";
import { dataSource } from './utils';


ReactFusioncharts.fcRoot(FusionCharts, charts,CandyTheme);


const Chart = ({type}) => {
  return (
      <ReactFusioncharts
        type={type}
        width="100%"
        height="50%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
}

export default Chart