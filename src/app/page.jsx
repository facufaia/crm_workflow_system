"use client";
import MyDataTable from "@/app/components/MyDataTable.jsx";
import ModalBTN from "@/app/components/ModalBTN.jsx";
import { columns } from "@/lib/utils.js";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function getExcel(setDatos, user_id, is_confirmed) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/orders?user_id=${user_id}&is_confirmed=${is_confirmed}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    console.log(data);
    setDatos(data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default function Dashboard() {
  const Router = useRouter();
  const [datos, setDatos] = useState(undefined);

  useEffect(() => {
    const loggedIn = getCookie("loggedIn");
    if (!loggedIn) {
      // Si la cookie no indica que el usuario está logueado, redireccionar
      Router.push("/login"); // Ajusta a la ruta de tu página de login
    }

    const userId = getCookie("user_id"); // Recuperar el user_id de la cookie

    getExcel(setDatos, userId, ""); // Obtener los datos de la API
  }, [Router]);

  // Función para obtener el valor de una cookie por nombre
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  return (
    <>
      {getCookie("loggedIn") ? (
        <main className="flex min-h-screen flex-col items-start gap-12 p-24 font-semibold text-slate-100 bg-slate-900">
          <h1>DASHBOARD</h1>
          <section className="flex flex-col gap-6 w-full">
            <div className="flex w-full items-center justify-between">
              <h2>YOUR ORDERS</h2>
              <ModalBTN modalAction={"createNewOrder"}>New Order</ModalBTN>
            </div>
            {datos && <MyDataTable columns={columns} data={datos} />}
          </section>
        </main>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
}
