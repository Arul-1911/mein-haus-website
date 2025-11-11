"use client";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";
import Description from "../description";

function DueServiceInvoiceTable({ items, showDelete = true }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    if (!id) return;
    router.refresh();
  };
  return (
    <section>
      <Table style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <TableHeader>
          <TableRow>
            <TableHead>Service Name</TableHead>
            <TableHead>Deposit Amount</TableHead>
            <TableHead>Project Cost</TableHead>
            <TableHead>Due</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-start">
          {items?.map((item, index) => (
            <TableRow key={item.id || index}>
              <TableCell className="align-top">
                <div className="max-w-[200px] whitespace-normal wrap-break-word">
                  <span className="font-medium block">{item.serviceType}</span>
                  <span className="text-sm text-gray-500 block">
                    <Description
                      description={item.description}
                      limit={40}
                      textsize="md"
                    />
                  </span>
                </div>
              </TableCell>
              <TableCell className="font-semibold text-[#9D9D9D]">
                ${item.depositAmount.toFixed(2)}
              </TableCell>
              <TableCell className="font-semibold text-[#9D9D9D]">
                ${item.projectCost.toFixed(2)}
              </TableCell>

              <TableCell className="font-semibold text-[#9D9D9D]">
                ${item.due.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default DueServiceInvoiceTable;
