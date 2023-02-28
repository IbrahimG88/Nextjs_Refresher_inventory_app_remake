import * as XLSX from "xlsx";

export default function OrderDetails({ selectedItems }) {
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(selectedItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "OrderDetails.xlsx");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-100">
            <th className="w-1/2 py-2 px-4 text-left font-bold">Test Name</th>
            <th className="w-1/4 py-2 px-4 text-left font-bold">
              Order Quantity
            </th>
            <th className="w-1/4 py-2 px-4 text-left font-bold">
              Total Stocks
            </th>
            <th className="w-1/4 py-2 px-4 text-left font-bold">
              Total After ordering
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedItems &&
            selectedItems.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4">{item.testName}</td>
                <td className="py-2 px-4">{item.orderQuantity}</td>
                <td className="py-2 px-4">{item.TotalStocks}</td>
                <td className="py-2 px-4">{item.TotalAfterOrder}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        onClick={downloadExcel}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Export to Excel
      </button>
    </div>
  );
}
