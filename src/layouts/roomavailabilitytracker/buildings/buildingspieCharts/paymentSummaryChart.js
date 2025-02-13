import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["PendingPayments", 11],
  ["CompletedPayments", 2],

];

const options = {
  title: "PaymentSummary",
  slices: [
    {
      color: "#D2691E"
    },
    {
      color: "#6495ED"
    },

  ],
};

export default function PaymentSummaryChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
