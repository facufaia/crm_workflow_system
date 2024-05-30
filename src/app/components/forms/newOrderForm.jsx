"use client";
import { useForm } from "react-hook-form";
// newOrderForm
// Eleccion de pais y cliente, con la opcion de agregar un nuevo cliente y pais
// si es repetida, repetida con cambios o nueva = PO TTYPE
// Eleccion de producto, con la opcion de agregar un nuevo producto
// si es repetida con cambios, cual es el cambio
// Eleccion de cantidad
// Eleccion de fecha de entrega
// Eleccion de fecha de pago
// Eleccion de condiciones de pago
// Eleccion de condiciones de entrega

export default function UserRegisterForm({ URL }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const res = await apiRegisterUser(data);

        const sign = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: true,
          callbackUrl: URL,
        });

        console.log(sign);
      })}
      className="flex flex-col items-center gap-6"
    >
      <div className="flex w-full sm:w-[591px] flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-end">
            <label htmlFor="email">Client Full</label>
            {errors.email && (
              <span role="alert" className="text_input_error">
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            name="email"
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            placeholder={"georgemartins@gmail.com"}
            className="text_input"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-end">
            <label htmlFor="password">Password</label>
            {errors.password && (
              <span role="alert" className="text_input_error">
                {errors.password.message}
              </span>
            )}
          </div>
          <input
            name="password"
            type="text"
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 40,
                message: "Password maximun is 40 characters",
              },
              minLength: {
                value: 6,
                message: "Password minimun is 6 characters",
              },
            })}
            placeholder={"******"}
            className="text_inputsm"
          />
        </div>
      </div>
      <input
        type="submit"
        className="text_input hover:bg-green-500 cursor-pointer"
      />
    </form>
  );
}
