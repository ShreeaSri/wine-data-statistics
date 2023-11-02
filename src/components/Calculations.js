import "./Calculations.css";

import {
  flavanoidsMean,
  flavanoidsMedian,
  flavanoidsMode,
  gammaMean,
  gammaMedian,
  gammaMode,
} from "../utils/statistics";

function Calculations() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {flavanoidsMean.map((mean, index) => (
              <th key={index}>Class {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {flavanoidsMean.map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td> //toFixed() used for fixing the decimal place upto 3 place.
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {flavanoidsMedian.map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {flavanoidsMode.map((mode, index) => (
              <td key={index}>{mode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {gammaMean.map((mean, index) => (
              <th key={index}>Class {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {gammaMean.map((mean, index) => (
              <td key={index}>{mean.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {gammaMedian.map((median, index) => (
              <td key={index}>{median.toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {gammaMode.map((mode, index) => (
              <td key={index}>{mode.toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculations;
