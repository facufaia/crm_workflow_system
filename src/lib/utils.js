import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const columns = [
  {
    header: "Order ID",
    accessorKey: "matrix_id",
  },
  {
    header: "Creation Date",
    accessorKey: "creation_date",
  },
  {
    header: "Commercial In Charge",
    accessorKey: "commercial_in_charge",
  },
  {
    header: "Client Full Name",
    accessorKey: "client_full_name",
  },
  {
    header: "Country",
    accessorKey: "country",
  },
  {
    header: "PO Type",
    accessorKey: "po_type",
  },
  {
    header: "GBR Product Code",
    accessorKey: "gbr_product_code",
  },
  {
    header: "Product Family",
    accessorKey: "product_family",
  },
  {
    header: "Product Type",
    accessorKey: "product_type",
  },
  {
    header: "Change Needed",
    accessorKey: "change_needed",
  },
  {
    header: "Pack and Manual Languages",
    accessorKey: "pack_and_manual_languages",
  },
  {
    header: "Packaging Requirement",
    accessorKey: "packaging_requirement",
  },
  {
    header: "Master Carton",
    accessorKey: "master_carton",
  },
  {
    header: "Quantity",
    accessorKey: "q",
  },
  {
    header: "Supplier",
    accessorKey: "supplier",
  },
  {
    header: "Suppliers Reference Cost",
    accessorKey: "suppliers_reference_cost",
  },
  {
    header: "Payment Term",
    accessorKey: "payment_term",
  },
  {
    header: "Specify Required Certificate",
    accessorKey: "especify_required_certificate",
  },
  {
    header: "Brand",
    accessorKey: "brand",
  },
  {
    header: "GBR Sales PI",
    accessorKey: "gbr_sales_pi",
  },
  {
    header: "Client Needed Ideal ETD",
    accessorKey: "client_needed_ideal_etd",
  },
  {
    header: "Advance Responsibility",
    accessorKey: "advance_responsability",
  },
  {
    header: "Is Confirmed",
    accessorKey: "is_confirmed",
  },
];
