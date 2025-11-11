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
import { Plus, Trash2 } from "lucide-react";
import Description from "../description";
import { useState } from "react";
import { cn } from "@/lib/utils";

function DueRegsInvoiceTable({ items, showDelete = true }) {
  const router = useRouter();
  const [data, setData] = useState(
    items.map((item) => ({ ...item, isDeleted: false }))
  );

  const handleAdd = (itemId) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, isDeleted: !item.isDeleted } : item
      )
    );
    // router.refresh();
  };

  // console.log(data);

  // const handleDelete = async (id) => {
  //   if (!id) return;
  // };
  return (
    <section>
      <Table style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <TableHeader>
          <TableRow className="font-bold text-md">
            <TableHead>Service Name</TableHead>
            <TableHead>Deposit Amount</TableHead>
            <TableHead>Project Cost</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-start">
          {data?.map((item, index) => (
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
              {item.isDeleted === false && !item.paid && (
                <TableCell className="text-center cursor-pointer">
                  <div className="pl-3">
                    <Trash2
                      className="text-red-500"
                      onClick={() => handleAdd(item.id)}
                      size={17}
                    />
                  </div>
                </TableCell>
              )}
              {item.isDeleted === true && !item.paid && (
                <TableCell className="pl-4">
                  <div className="bg-[#1E9BD0] w-fit rounded-full text-white p-1 cursor-pointer">
                    <Plus
                      className="text-white"
                      onClick={() => handleAdd(item.id)}
                      size={16}
                      color="white"
                    />
                  </div>
                </TableCell>
              )}
              {item.paid && (
                <TableCell className="text-start">
                  <p className="bg-green-500/90 px-2 py-1 text-white rounded-2xl w-fit">
                    Paid
                  </p>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default DueRegsInvoiceTable;
