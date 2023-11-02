import { WINE_DATA } from "./constant";

const calculateMean = (data, property) => {
  const classes = [...new Set(data.map((item) => item.Alcohol))]; //sorting the classes
  // console.log(classes);
  const result = classes.map((targetClass) => {
    const filteredData = data.filter((item) => item.Alcohol === targetClass); // filtering the data according to the classes
    // console.log(filteredData[2]);
    const sum = filteredData.reduce(
      (acc, item) => acc + parseFloat(item[property]),
      0
    );
    console.log(sum);
    // console.log(sum / filteredData.length);
    return sum / filteredData.length;
  });
  return result;
};

// function to calculate the median of a property for all alcohol classes
const calculateMedian = (data, property) => {
  const classes = [...new Set(data.map((item) => item.Alcohol))];
  const result = classes.map((targetClass) => {
    const filteredData = data.filter((item) => item.Alcohol === targetClass);
    const sortedValues = filteredData
      .map((item) => parseFloat(item[property]))
      .sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
      return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
    }
    return sortedValues[middle];
  });
  return result;
};

//function to calculate the mode of a property for all alcohol classes
const calculateMode = (data, property) => {
  const classes = [...new Set(data.map((item) => item.Alcohol))];
  const result = classes.map((targetClass) => {
    const filteredData = data.filter((item) => item.Alcohol === targetClass);
    const valueCountMap = {};
    let maxCount = 0;
    let mode = null;
    for (const item of filteredData) {
      const value = parseFloat(item[property]);
      valueCountMap[value] = (valueCountMap[value] || 0) + 1;
      if (valueCountMap[value] > maxCount) {
        maxCount = valueCountMap[value];
        mode = value;
      }
    }
    return mode;
  });
  return result;
};

export const flavanoidsMean = calculateMean(WINE_DATA, "Flavanoids");
export const flavanoidsMedian = calculateMedian(WINE_DATA, "Flavanoids");
export const flavanoidsMode = calculateMode(WINE_DATA, "Flavanoids");

export const gammaMean = calculateMean(WINE_DATA, "Gamma");
export const gammaMedian = calculateMedian(WINE_DATA, "Gamma");
export const gammaMode = calculateMode(WINE_DATA, "Gamma");

// function to calculate the "Gamma" property
const calculateGamma = (item) => (item.Ash * item.Hue) / item.Magnesium;

WINE_DATA.forEach((item) => {
  item.Gamma = calculateGamma(item);
});
