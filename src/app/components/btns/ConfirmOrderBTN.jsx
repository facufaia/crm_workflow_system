import { confirmOrder } from "@/lib/api.js";
import { useModalStore } from "@/app/context/modal.jsx";
import IcoCheck from "@/app/components/icons/IcoCheck.jsx";

export default function ConfirmOrderBTN({ order_id }) {
  const handleClick = async () => {
    const res = confirmOrder({
      order_id,
    });

    useModalStore.setState({ modalAction: "confirmOrder" });
  };

  return (
    <button
      className="flex gap-2"
      onClick={() => {
        handleClick({ order_id });
      }}
    >
      <IcoCheck /> Confirm Order
    </button>
  );
}
