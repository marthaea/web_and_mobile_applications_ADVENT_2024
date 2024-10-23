//Iterating through an array of district names
const rainfalldata = [
    {district : "Kampala", rainfall : 140},
    {district : "Kabale", rainfall : 180},
    {district : "Mubende", rainfall: 60},
    {district : "Kyotera", rainfall : 30},
];

rainfalldata.forEach(district => {
    console.log(`District: ${district.district}, Rainfall: ${district.rainfall} mm`);
});