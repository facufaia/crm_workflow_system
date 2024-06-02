import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const columns = [
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
