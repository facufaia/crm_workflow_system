import { Button } from "@/components/ui/button";
import { useModalStore } from "@/app/context/modal.jsx";

export default function ModalBTN({ children, modalAction }) {
  const { setModalAction } = useModalStore();
  return (
    <Button
      className="bg-slate-600 hover:bg-slate-700"
      onClick={() => {
        setModalAction(modalAction);
      }}
    >
      {children}
    </Button>
  );
}
