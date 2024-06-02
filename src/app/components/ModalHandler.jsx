"use client";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label.jsx";
import { useModalStore } from "@/app/context/modal.jsx";
import { createPortal } from "react-dom";

export default function ModalHandler() {
  const { modalAction } = useModalStore();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onTouched",
  // });
  console.log("first");
  console.log(modalAction);

  let modalContent;
  switch (modalAction) {
    case "createNewOrder":
      modalContent = "createNewOrder";
      break;
    case "deleteOrder":
      modalContent = <div className="bg-red-500 h-56 w-56">deleteOrder</div>;
      break;
    default:
      modalContent = null;
  }
  console.log("second");
  console.log(modalContent);
  console.log(modalAction);

  return createPortal(
    <div
      className={modalContent ? "h-96 w-96 bg-green-500 z-50 fixed" : "hidden"}
    >
      {modalContent}
    </div>,
    document.body
  );
}

// <form
//   onSubmit={handleSubmit(async (data) => {
//     const res = await apiRegisterUser(data);
//     const sign = await signIn("credentials", {
//       email: data.email,
//       password: data.password,
//       redirect: true,
//       callbackUrl: URL,
//     });

//     console.log(sign);
//   })}
//   className={
//     openModal ? "flex flex-col items-center gap-6" : "hidden"
//   }
// >
//   <div className="flex w-full sm:w-[591px] flex-col gap-4">
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <Label htmlFor="client">Client</Label>
//         {errors.client && (
//           <span role="alert" className="text_input_error">
//             {errors.client.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="client"
//         type="client"
//         {...register("client", {
//           required: {
//             value: true,
//             message: "Client is required",
//           },
//         })}
//         placeholder={"Comagro"}
//         className="text_input"
//       />
//     </div>
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <label htmlFor="quantity">Quantity</label>
//         {errors.quantity && (
//           <span role="alert" className="text_input_error">
//             {errors.quantity.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="quantity"
//         type="number"
//         {...register("quantity", {
//           required: "Quantity is required",
//           maxLength: {
//             value: 40,
//             message: "Quantity maximun is 40 characters",
//           },
//           minLength: {
//             value: 6,
//             message: "Quantity minimun is 6 characters",
//           },
//         })}
//         placeholder={"200"}
//         className="text_inputsm"
//       />
//     </div>
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <label htmlFor="payment_terms">Payment Terms</label>
//         {errors.payment_terms && (
//           <span role="alert" className="text_input_error">
//             {errors.payment_terms.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="payment_terms"
//         text="number"
//         {...register("payment_terms", {
//           required: "Payment terms is required",
//           maxLength: {
//             value: 40,
//             message: "Quantity maximun is 40 characters",
//           },
//           minLength: {
//             value: 6,
//             message: "Quantity minimun is 6 characters",
//           },
//         })}
//         placeholder={"200"}
//         className="text_inputsm"
//       />
//     </div>
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <label htmlFor="etd">ETD</label>
//         {errors.etd && (
//           <span role="alert" className="text_input_error">
//             {errors.etd.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="etd"
//         text="number"
//         {...register("etd", {
//           required: "ETD is required",
//           maxLength: {
//             value: 40,
//             message: "Etd maximun is 40 characters",
//           },
//           minLength: {
//             value: 6,
//             message: "Etd minimun is 6 characters",
//           },
//         })}
//         placeholder={"200"}
//         className="text_inputsm"
//       />
//     </div>
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <label htmlFor="new_product">Is it a new product?</label>
//         {errors.new_product && (
//           <span role="alert" className="text_input_error">
//             {errors.new_product.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="new_product"
//         text="number"
//         {...register("new_product", {
//           required: "If is it a new product we need to know it",
//           maxLength: {
//             value: 40,
//             message: "Etd maximun is 40 characters",
//           },
//           minLength: {
//             value: 6,
//             message: "Etd minimun is 6 characters",
//           },
//         })}
//         placeholder={"200"}
//         className="text_inputsm"
//       />
//     </div>
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <label htmlFor="change">Change</label>
//         {errors.change && (
//           <span role="alert" className="text_input_error">
//             {errors.change.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="change"
//         text="text"
//         {...register("change", {
//           required: "If is it a change we need to know it",
//           minLength: {
//             value: 1,
//             message: "Etd minimun is 6 characters",
//           },
//         })}
//         placeholder={"200"}
//         className="text_inputsm"
//       />
//     </div>
//     <div className="flex flex-col gap-2">
//       <div className="flex gap-2 items-end">
//         <label htmlFor="product_code">Product Code</label>
//         {errors.product_code && (
//           <span role="alert" className="text_input_error">
//             {errors.product_code.message}
//           </span>
//         )}
//       </div>
//       <input
//         name="product_code"
//         text="text"
//         {...register("product_code", {
//           required: "If is it a product_code we need to know it",
//           minLength: {
//             value: 1,
//             message: "Product code minimun is 2 characters",
//           },
//         })}
//         placeholder={"200"}
//         className="text_inputsm"
//       />
//     </div>
//   </div>
//   <input
//     type="submit"
//     className="text_input hover:bg-green-500 cursor-pointer"
//   />
// </form>,
