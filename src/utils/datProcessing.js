import data from './Manufac _ India Agro Dataset.json'; 

const toNumber = (value) => {
  const num = parseFloat(value);
  return isNaN(num) ? 0 : num;   //if my value is not a 
};
const extractYear = (yearString) => {
  // Example yearString: "Financial Year (Apr - Mar), 1950"
  const matches = yearString.match(/\d{4}/); // Extracts four consecutive digits
  return matches ? parseInt(matches[0], 10) : 0; // Parses the first match as an integer
};


export default function processCropsData() {
  const years = [...new Set(data.map(item => extractYear(item.Year)))];
  const crops = [...new Set(data.map(item => item.crop))];
  // console.log(years)

  

  // console.log("Years: ", years); 
  // console.log("Crops: ", crops); 

  const maxMinProductionByYear = years.map(year => {
    const cropsInYear = data.filter(item => extractYear(item.Year) === year);

    let maxCrop = { yield: -Infinity }; //initializing my maxCrop yield as as low as possible
    let minCrop = { yield: Infinity };  //initializing my maxCrop yield as as high as possible

    cropsInYear.forEach(item => { //calculating max yield and min yield 
      const yieldValue = toNumber(item.yield);
      if (yieldValue > maxCrop.yield) {
        maxCrop = { ...item, yield: yieldValue }; //will update the yield value only
      }
      if (yieldValue < minCrop.yield) {
        minCrop = { ...item, yield: yieldValue };
      }
    });

    return {
      year,
      maxCrop: maxCrop.crop,
      minCrop: minCrop.crop,
    };
  });


  const avgYieldAndAreaByCrop = crops.map(crop => {
    const cropsData = data.filter(item => item.crop === crop);   //saving the one type of crop information
    const totalYield = cropsData.reduce((sum, item) => sum + toNumber(item.yield), 0);  //adding the yield in all years of that crop
    const totalArea = cropsData.reduce((sum, item) => sum + toNumber(item.area), 0);  //Calculating the total area of that particular crop is cultivated
    const count = cropsData.length; //total number of crops available

    return {
      crop,
      avgYield: (totalYield / count).toFixed(3),  //returning the avgYield upto 3 precision point
      avgArea: (totalArea / count).toFixed(3),  //returning the avgArea upto 3 precision point
    };
  });

  return { maxMinProductionByYear, avgYieldAndAreaByCrop };
}
