import { Box } from '@chakra-ui/react';
import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Servies Charges", 45000],
  ["CMC", 15000],
  ["AMC", 10000],
  ["Spares", 30000],
];

export const options = {
  pieHole: 0.4,
};

const DonutChart = () => {
    return (
        <Box zIndex={'-1'}>
        <Chart
          chartType="PieChart"
            data={data}
          options={options}
            />
            </Box>
  );
};

export default DonutChart;
