import React, { useEffect, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import FilterItem from "../../../components/FilterItem";
import Chart from "./Chart";
import { filters, groupByApiMap, groupByOptions } from "./utils";
import CostTable from "./CostTable";
import DateFilter from "./DateFilter";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { fetchCostReport } from "../../../api/api";

const CostExplorer = () => {
  const [selected, setSelected] = useState("Account ID");
  const [selectedChart, setSelectedChart] = useState("bar");
  const [collapsed, setCollapsed] = useState(false);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-05-31");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const remainingOptions = groupByOptions.filter(
    (option) => option !== selected
  );

  const visibleOptions = remainingOptions.slice(0, 6);
  const moreOptions = remainingOptions.slice(6);

  const chartOptions = [
    { type: "bar", icon: BarChartOutlinedIcon, name: "mscolumn2d" },
    { type: "line", icon: TimelineOutlinedIcon, name: "msline" },
    { type: "column", icon: LeaderboardOutlinedIcon, name: "stackedcolumn2d" },
  ];

  const chartMap = {
    bar: "mscolumn2d",
    line: "msline",
    column: "stackedcolumn2d",
  };

  const handleDateApply = ({ startDate, endDate }) => {
    console.log("Applied range:", startDate, endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  };



  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const apiGroupBy = groupByApiMap[selected];
        const reportData = await fetchCostReport(startDate, endDate,apiGroupBy);
        setData(reportData);
      } catch (error) {
        console.error("Error fetching cost report:", error);
      }
      setLoading(false);
    };

    getData();
  }, [startDate, endDate,selected]);

  return (
    <>
      <div className="flex-row border-b-[#E6E6E6] border-b-1 px-6 py-6">
        <h3 className="text-2xl text-left font-bold text-gray-800">
          Cost Explorer
        </h3>
        <h5 className="text-[#555b6c]">
          How to always be aware of cost changes and history.
        </h5>
      </div>

      <div className="m-4 border border-[#E6E6E6]">
        <div className="flex justify-between border-b border-[#E6E6E6] px-4 py-4 bg-[#f8f8f8]">
          <div className="flex items-center text-sm gap-2">
            <p className="font-bold whitespace-nowrap">Group By:</p>

            <div className="border border-[#E6E6E6] rounded-md px-3 py-2 bg-[#0a3ca2] ">
              <p className="text-white font-semibold whitespace-nowrap">
                {selected}
              </p>
            </div>

            <div className="flex gap-2 items-center">
              {visibleOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => setSelected(option)}
                  className="cursor-pointer border border-[#cfdde5] rounded-md px-3 py-2 bg-white h-10 "
                >
                  <p className="text-[#0a3ca2] font-semibold whitespace-nowrap">
                    {option}
                  </p>
                </div>
              ))}
            </div>

            {moreOptions.length > 0 && (
              <div className="relative">
                <div
                  onClick={() => setShowMore(!showMore)}
                  className="cursor-pointer border border-[#cfdde5] rounded-md px-3 py-2 bg-white h-10 flex items-center gap-1 text-[#0a3ca2]"
                >
                  <p className=" font-semibold">More</p>
                  <ArrowDropDownOutlinedIcon />
                </div>

                {showMore && (
                  <div className="absolute top-12 left-0 bg-white border border-[#E6E6E6] rounded-md shadow-md z-10 w-48">
                    {moreOptions.map((option) => (
                      <div
                        key={option}
                        onClick={() => {
                          setSelected(option);
                          setShowMore(false);
                        }}
                        className="px-4 py-2 hover:bg-[#eef6fe] cursor-pointer text-[#E6E6E6]]"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div
            className={`flex rounded-sm items-center px-2 py-2 cursor-pointer ${
              collapsed ? " bg-[#0a3ca2]" : "border border-[#0a3ca2] bg-white"
            }`}
            onClick={() => setCollapsed(!collapsed)}
          >
            <TuneIcon
              className={`${collapsed ? "text-white" : "text-[#0a3ca2]"}`}
            />
          </div>
        </div>
        <div className="flex w-full overflow-hidden">
          <div
            className={`flex-1 px-4 py-4 bg-white ${
              collapsed ? "w-64" : "w-0"
            }`}
          >
            <div className="flex justify-between items-center">
              <p>Costs($)</p>
              <div className="flex gap-2">
                <DateFilter onApply={handleDateApply} />

                <div className="flex border border-[#E6E6E6] rounded-sm">
                  {chartOptions.map(({ type, icon: Icon }) => (
                    <button
                      key={type}
                      onClick={() => setSelectedChart(type)}
                      className={`p-1 border-[#E6E6E6] cursor-pointer ${
                        selectedChart === type
                          ? "bg-[#eef6fe] text-[#0a3ca2]"
                          : "bg-white text-gray-600"
                      }`}
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-[#E6E6E6] rounded-sm px-2 py-2 mt-4">
              <Chart type={chartMap[selectedChart]} data={data} startDate={startDate} endDate={endDate}/>
            </div>
            <div className="border border-[#869bc3] rounded-sm mt-6 bg-[#dbe6f8]">
              <p className="py-4 text-center text-[#1945b7]">
                We are showing up to 1000 records by cost
              </p>
            </div>
            <CostTable groupByLabel={selected} data={data} startDate={startDate} endDate={endDate}/>
          </div>

          <div className={`overflow-hidden ${collapsed ? "w-64" : "w-0"}`}>
            {collapsed && (
              <div className="h-full bg-white border-l border-[#E6E6E6] p-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-semibold text-xl">Filters</h2>
                  <div className="flex text-[#0a3ca2] gap-2 items-center cursor-pointer">
                    <p className="font-semibold">Reset All</p>
                    <RestartAltOutlinedIcon />
                  </div>
                </div>

                {filters.map((filter, index) => (
                  <FilterItem key={index} label={filter.label} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CostExplorer;
