export default function OrderDetails({ selectedItems }) {
  return (
    <div>
      <h2>Order Details</h2>
      <ul>
        {selectedItems &&
          selectedItems.map((item) => (
            <li key={item.id}>
              <span>{item.testName}</span>
              <br />
              <span>Order Quantity: {item.orderQuantity}</span>
              <br />
              <span>Total Stocks: {item.TotalStocks}</span>
              <p>
                Total Items:{" "}
                {parseInt(item.orderQuantity) + parseInt(item.TotalStocks)}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
