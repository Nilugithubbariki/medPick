import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["a", 45000],
  ["b", 15000],
  ["c", 10000],
    ["d", 30000],
  ['e',20000]
];

export const options = {
  pieHole: 0.8,
//   is3D: false,
};
const CircleArrowGraph = () => {
   return (
        <div height={"100px"} width={"100px"}>
           <Chart
            chartType="PieChart"
            data={data}
          options={options}
            />
        </div>
   )
};

export default CircleArrowGraph;
