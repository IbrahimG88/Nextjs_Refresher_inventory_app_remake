import React, { useState, useEffect } from "react";

export default function CreateOrder() {
  const [inventory, setInventory] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    fetch(`/api/fetch-inventory`)
      .then((response) => response.json())
      .then((data) => {
        //data from firebase will be returned as an object and nested ones
        const transformedInventory = []; // to transform an object into an array
        for (const key in data) {
          transformedInventory.push({
            id: data[key].id,
            testName: data[key].testName,
            TotalStocks: data[key].TotalStocks,
          });
        }
        transformedInventory.sort((a, b) => {
          if (a.TotalStocks == null || a.TotalStocks < 1) {
            return 1;
          }
          if (b.TotalStocks == null || b.TotalStocks < 1) {
            return -1;
          }
          return a.TotalStocks - b.TotalStocks;
        });

        setInventory(transformedInventory);
      });
  }, []);

  const handleItemSelection = (item, orderQuantity) => {
    setSelectedItems((prevSelectedItems) => {
      const existingIndex = prevSelectedItems.findIndex(
        (selectedItem) => selectedItem.id === item.id
      );
      if (existingIndex !== -1) {
        const newSelectedItems = [...prevSelectedItems];
        newSelectedItems[existingIndex].orderQuantity = orderQuantity;
        return newSelectedItems;
      } else {
        return [...prevSelectedItems, { ...item, orderQuantity }];
      }
    });
  };

  const handleSubmit = () => {
    // Here you can send the selected items to the server and store them in MongoDB
    console.log(selectedItems);
  };

  return (
    <div>
      <h2>Select items from inventory</h2>
      <button onClick={handleSubmit}>Submit order</button>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>
            <span>{item.testName}</span>
            <br />
            <span>Total Stocks: {item.TotalStocks}</span>
            <br />
            <input
              type="number"
              min="0"
              value={
                selectedItems.find(
                  (selectedItem) => selectedItem.id === item.id
                )?.orderQuantity || ""
              }
              onChange={(e) => handleItemSelection(item, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
