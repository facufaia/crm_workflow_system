"use client";
import MyDataTable from "@/app/components/MyDataTable.jsx";
import ModalBTN from "@/app/components/ModalBTN.jsx";
import { columns } from "@/lib/utils.js";
import { useEffect, useState } from "react";

async function getExcel(setDatos) {
  try {
    const res = await fetch(`http://localhost:3000/api/orders`, {
      cache: "no-store",
    });

    const data = await res.json();
    console.log(data);
    setDatos(data);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export default function Dashboard() {
  const [datos, setDatos] = useState(undefined);

  useEffect(() => {
    getExcel(setDatos);
  }, []);

  return (
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
  );
}
