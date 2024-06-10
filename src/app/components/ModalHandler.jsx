"use client";
import { useModalStore } from "@/app/context/modal.jsx";
import { createPortal } from "react-dom";
import NewOrderForm from "@/app/components/forms/NewOrderForm.jsx";
import EditOrderForm from "@/app/components/forms/EditOrderForm.jsx";
import IcoX from "@/app/components/icons/IcoX.jsx";

export default function ModalHandler() {
  const { modalAction, setModalAction } = useModalStore();

  let modalContent;
  switch (modalAction) {
    case "createNewOrder":
      modalContent = <NewOrderForm />;
      break;
    case "editOrder":
      modalContent = <EditOrderForm />;
      break;
    case "deleteOrder":
      modalContent = <div className="bg-red-500 h-56 w-56">deleteOrder</div>;
      break;
    case "confirmOrder":
      modalContent = (
        <div className="bg-red-500 h-56 w-56">Order Confirmed</div>
      );
      break;
    default:
      modalContent = null;
  }

  return createPortal(
    <section
      className={
        modalContent
          ? "min-h-screen w-full z-50 fixed flex items-center justify-center bg-[#000000da]"
          : "hidden"
      }
    >
      <div
        className="absolute right-5 top-5 text-3xl cursor-pointer"
        onClick={() => {
          setModalAction(null);
        }}
      >
        <IcoX hover={true} cursorPointer={true} />
      </div>
      {modalContent}
    </section>,
    document.body
  );
}
