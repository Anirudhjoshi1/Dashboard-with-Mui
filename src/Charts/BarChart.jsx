import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses" , "Profit"],
  ["2014", 1000, 400 , 200],
  ["2015", 1170, 460 , 250],
  ["2016", 660, 1120 , 300],
  ["2017", 876, 540 , 350],
  ["2018", 962, 460 , 342],
  ["2019", 384, 540 , 982],
  ["2020", 682, 1200 , 250],

];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors: ["rgb(53,138,148)" , "rgb(37,11,165)" ,"#188310"]
};

function BarChart() {
  return (
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      width="100%"
      height="450px"
      data={data}
      options={options}
    />
  );
}

export default BarChart;