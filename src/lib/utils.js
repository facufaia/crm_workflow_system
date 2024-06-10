import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import IcoCancel from "@/app/components/icons/IcoCancel.jsx";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IcoTrash from "@/app/components/icons/IcoTrash";
import { deleteOrder } from "@/lib/api.js";
import ConfirmOrderBTN from "@/app/components/btns/ConfirmOrderBTN.jsx";
import EditOrderBTN from "@/app/components/btns/EditOrderBTN.jsx";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const columns = [
  {
    id: "action",
    cell: (row) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {row.row.original.is_confirmed == "undefined" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <ConfirmOrderBTN order_id={row.row.original.matrix_id} />
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem>
              <EditOrderBTN order={row.row.original} />
            </DropdownMenuItem>
            {row.row.original.is_confirmed != "undefined" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex gap-2"
                  onClick={() => {
                    deleteOrder(row.row.original.matrix_id);
                  }}
                >
                  <IcoCancel /> Cancel Order
                </DropdownMenuItem>
              </>
            )}
            {row.row.original.is_confirmed == "undefined" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex gap-2"
                  onClick={() => {
                    deleteOrder(row.row.original.matrix_id);
                  }}
                >
                  <IcoTrash /> Delete Order
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
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
