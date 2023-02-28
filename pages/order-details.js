export default function OrderDetails({ selectedItems }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <ul className="list-disc list-inside">
        {selectedItems &&
          selectedItems.map((item) => (
            <li key={item.id} className="mb-4">
              <span className="font-bold">{item.testName}</span>
              <br />
              <span>Order Quantity: {item.orderQuantity}</span>
              <br />
              <span>Total Stocks: {item.TotalStocks}</span>
              <p className="font-bold mt-2">
                Total Items:{" "}
                {parseInt(item.orderQuantity) + parseInt(item.TotalStocks)}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
