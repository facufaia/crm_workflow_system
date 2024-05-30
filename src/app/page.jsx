"use client";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Modal } from "./components/Modal";

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

  const columns = [
    {
      name: "Order ID",
      selector: (row) => row.matrix_id,
    },
    {
      name: "Creation Date",
      selector: (row) => row.creation_date,
    },
    {
      name: "Commercial In Charge",
      selector: (row) => row.commercial_in_charge,
    },
    {
      name: "Client Full Name",
      selector: (row) => row.client_full_name,
    },
    {
      name: "Country",
      selector: (row) => row.country,
    },
    {
      name: "PO Type",
      selector: (row) => row.po_type,
    },
    {
      name: "GBR Product Code",
      selector: (row) => row.gbr_product_code,
    },
    {
      name: "Product Family",
      selector: (row) => row.product_family,
    },
    {
      name: "Product Type",
      selector: (row) => row.product_type,
    },
    {
      name: "Change Needed",
      selector: (row) => row.change_needed,
    },
    {
      name: "Pack and Manual Languages",
      selector: (row) => row.pack_and_manual_languages,
    },
    {
      name: "Packaging Requirement",
      selector: (row) => row.packaging_requirement,
    },
    {
      name: "Master Carton",
      selector: (row) => row.master_carton,
    },
    {
      name: "Quantity",
      selector: (row) => row.q,
    },
    {
      name: "Supplier",
      selector: (row) => row.supplier,
    },
    {
      name: "Suppliers Reference Cost",
      selector: (row) => row.suppliers_reference_cost,
    },
    {
      name: "Payment Term",
      selector: (row) => row.payment_term,
    },
    {
      name: "Specify Required Certificate",
      selector: (row) => row.especify_required_certificate,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "GBR Sales PI",
      selector: (row) => row.gbr_sales_pi,
    },
    {
      name: "Client Needed Ideal ETD",
      selector: (row) => row.client_needed_ideal_etd,
    },
    {
      name: "Advance Responsibility",
      selector: (row) => row.advance_responsability,
    },
    {
      name: "Is Confirmed",
      selector: (row) => row.is_confirmed,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-start gap-12 p-24 font-semibold">
      <h1>DASHBOARD</h1>
      <section className="flex flex-col gap-6 w-full">
        <div className="flex w-full items-center justify-between">
          <h2>YOUR ORDERS</h2>
          <button className="px-2 py-1 rounded-md bg-white text-black">
            CREATE NEW ORDER
          </button>
          <Modal />
        </div>
        {datos && <DataTable columns={columns} data={datos} fixedHeader />}
      </section>
    </main>
  );
}
