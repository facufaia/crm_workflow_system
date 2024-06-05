import * as z from "zod";

export const orderSchema = z
  .object({
    productCode: z
      .string()
      .min(4, "The product code must be at least 4 characters long"),
    productFamily: z
      .string()
      .min(4, "The product family must be at least 4 characters long"),
    productType: z
      .string()
      .min(4, "The product type must be at least 4 characters long"),
    changeNeeded: z
      .string()
      .min(4, "Change needed must be at least 4 characters long"),
    packManualLanguages: z
      .string()
      .min(2, "Pack manual languages must be at least 2 characters long"),
    packagingRequirement: z
      .string()
      .min(4, "Packaging requirement must be at least 4 characters long"),
    specifyRequiredCertificate: z.string(),
    GBRSalesPI: z
      .string()
      .min(4, "GBR Sales PI must be at least 4 characters long"),
    quantity: z.string().transform(parseFloat),
    referenceCost: z.string().transform(parseFloat),
    advanceResponsible: z
      .string()
      .refine(
        (val) => ["gbr", "client"].includes(val),
        "Advance responsible must be either GBR or Client"
      ),
    isNewProduct: z
      .string()
      .refine(
        (val) => ["repeated", "repeatedWChanges", "new"].includes(val),
        "Product status must be 'repeated', 'repeatedWChanges', or 'new'"
      ),
    masterCarton: z
      .boolean()
      .refine(
        (val) => typeof val === "boolean",
        "Master carton must be a boolean"
      ),
    brand: z
      .string()
      .refine(
        (val) => ["daewoo", "buffalo", "energizer", "peugeot"].includes(val),
        "Brand must be one of Daewoo, Buffalo, Energizer, Peugeot"
      ),
    companyName: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName;
      }
      return true;
    },
    {
      message: "Company name is required",
      path: ["companyName"],
    }
  );
