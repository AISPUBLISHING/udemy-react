import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartDataPointsValue = props.chartDataPoints.map(
    (chartpoint) => chartpoint.value
  );
  const maxValue = Math.max(...chartDataPointsValue);

  return (
    <div className="chart">
      {props.chartDataPoints.map((chartpoint) => (
        <ChartBar
          month={chartpoint.label}
          key={chartpoint.label}
          value={chartpoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};
export default Chart;
