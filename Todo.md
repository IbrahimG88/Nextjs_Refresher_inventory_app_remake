import React, { useState, useEffect } from "react";

export default function FetchInventory() {
const [data, setData] = useState([]);

// Using useEffect to call the API once mounted and set the data
useEffect(() => {
fetch(`/api/fetch-inventory`)
.then((response) => response.json())
.then((data) => {
//data from firebase will be returned as an object and nested ones
const transformedSales = []; // to transform an object into an array
for (const key in data) {
transformedSales.push({
col1: data[key].id,
col2: data[key].testName,
col3: data[key].TotalStocks,
});
}
setData(transformedSales);
console.log(data);
});
}, []);

return (
<ul>
{data.map((item) => (
<li key={item.col1}>
Test name:{item.col2} <br />
Total Stocks: {item.col3} <br />
<br />
</li>
))}
</ul>
);
}

// i got this array of items and stocks, I want to create a create order component where I use this Data array and click each single item, set amount for ordering and add it to a given order and store it then in mongodb
