import { useRouter } from "next/router";
import OrderDetails from "./order-details";

export default function OrderDetailsPage() {
  const router = useRouter();
  const { selectedItems } = router.query;

  console.log("selectedItems:", selectedItems);

  return <OrderDetails selectedItems={JSON.parse(selectedItems)} />;
}
