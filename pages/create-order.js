import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function CreateOrder() {
  const [inventory, setInventory] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const router = useRouter();

  useEffect(() => {
    fetch(`/api/fetch-inventory`)
      .then((response) => response.json())
      .then((data) => {
        const transformedInventory = [];

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
    console.log(selectedItems);

    router.push({
      pathname: "/OrderDetailsPage",
      query: { selectedItems: JSON.stringify(selectedItems) },
    });

    setSelectedItems([]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-4">Select items from inventory</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit order
      </button>
      <table className="table-auto mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">Test Name</th>
            <th className="px-4 py-2">Total Stocks</th>
            <th className="px-4 py-2">Order Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.testName}</td>
              <td className="border px-4 py-2">{item.TotalStocks}</td>
              <td className="border px-4 py-2">
                <input
                  type="number"
                  min="0"
                  value={
                    selectedItems.find(
                      (selectedItem) => selectedItem.id === item.id
                    )?.orderQuantity || ""
                  }
                  onChange={(e) => handleItemSelection(item, e.target.value)}
                  className="border border-gray-400 rounded py-2 px-3 w-24 focus:outline-none focus:border-blue-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
