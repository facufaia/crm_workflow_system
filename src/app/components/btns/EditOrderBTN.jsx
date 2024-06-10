import { useModalStore } from "@/app/context/modal.jsx";
import IcoEdit from "@/app/components/icons/IcoEdit.jsx";

export default function EditOrderBTN({ order }) {
  return (
    <button
      className="flex gap-2"
      onClick={() => {
        useModalStore.setState({ modalAction: "editOrder", modalData: order });
      }}
    >
      <IcoEdit /> Edit Order
    </button>
  );
}
