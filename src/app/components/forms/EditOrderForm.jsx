"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { orderSchema } from "@/app/validations/orderSchema.jsx";
import { useModalStore } from "@/app/context/modal";

export default function EditOrderForm() {
  const { modalData } = useModalStore();

  const form = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      productCode: modalData?.gbr_product_code,
      productFamily: modalData?.product_family,
      productType: modalData?.product_type,
      changeNeeded: modalData?.change_needed,
      packManualLanguages: modalData?.pack_and_manual_languages,
      packagingRequirement: modalData?.packaging_requirement,
      specifyRequiredCertificate: modalData?.especify_required_certificate,
      GBRSalesPI: modalData?.gbr_sales_pi,
      quantity: modalData?.q,
      referenceCost: modalData?.suppliers_reference_cost,
      brand: modalData?.brand,
      masterCarton: modalData?.master_carton,
      isNewProduct: modalData?.po_type,
      advanceResponsible: modalData?.advance_responsability,
    },
  });

  const isNewProduct = form.watch("isNewProduct");

  const handleSubmit = (values) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="p-10 w-full h-full grid grid-cols-6 gap-x-6 gap-y-4 text-slate-100"
      >
        <FormField
          control={form.control}
          name="productCode"
          render={({ field, fieldState: { error } }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">GBR product code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="GBR product code"
                    type="Text"
                    {...field}
                  />
                </FormControl>
                {error && <FormMessage>{error.message}</FormMessage>}
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="productFamily"
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">Product Family</FormLabel>
                <FormControl>
                  <Input placeholder="Product Family" type="Text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="productType"
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">Product Type</FormLabel>
                <FormControl>
                  <Input placeholder="Product Type" type="Text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="packManualLanguages"
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">
                  Pack and Manual Languages
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Pack and Manual Languages"
                    type="Text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="packagingRequirement"
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">Packaging Requirement</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Packaging Requirement"
                    type="Text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="specifyRequiredCertificate"
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">
                  Specify Required Certificate
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Specify Required Certificate"
                    type="Text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="GBRSalesPI"
          render={({ field }) => {
            return (
              <FormItem className="col-span-2">
                <FormLabel className="text-xl">GBR Sales PI</FormLabel>
                <FormControl>
                  <Input placeholder="GBR Sales PI" type="Text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Quantity</FormLabel>
                <FormControl>
                  <Input placeholder="Quantity" type="Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="referenceCost"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Reference Cost</FormLabel>
                <FormControl>
                  <Input placeholder="Reference Cost" type="Text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="advanceResponsible"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Advance Responsible</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Responsible" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gbr">GBR</SelectItem>
                    <SelectItem value="client">Client</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="isNewProduct"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Is New Product?</FormLabel>
                <Select onValueChange={field.onChange} className="text-white">
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="repeated">Repeated</SelectItem>
                    <SelectItem value="repeatedWChanges">
                      Repeated with Changes
                    </SelectItem>
                    <SelectItem value="new">New</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        {(isNewProduct === "repeatedWChanges" || isNewProduct === "new") && (
          <FormField
            control={form.control}
            name="changeNeeded"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-xl">Change Needed</FormLabel>
                  <FormControl>
                    <Input placeholder="Change Needed" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        )}
        <FormField
          control={form.control}
          name="masterCarton"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Master Carton</FormLabel>
                <FormControl>
                  <Checkbox />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-xl">Brand</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Brand" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="daewoo">Daewoo</SelectItem>
                    <SelectItem value="buffalo">Buffalo</SelectItem>
                    <SelectItem value="energizer">Energizer</SelectItem>
                    <SelectItem value="peugeot">Peugeot</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="col-span-6">
          Submit
        </Button>
      </form>
    </Form>
  );
}
