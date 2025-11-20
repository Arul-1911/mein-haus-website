"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Description from "../description";
import { Eye } from "lucide-react";
import NoNotes from "./no-notes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";
function NotesTabs({ notes, addNotes }) {
  const forCustomers = notes.filter((item) => item.isForPro === true);
  const forProsAndCustomers = notes.filter((item) => item.isForPro === false);
  return (
    <section className="mx-auto">
      <Tabs defaultValue="customer" className="bg-[#F9F9F9] w-full">
        <div className="h-fit  max-sm:min-h-20">
          <TabsList className="w-full max-sm:space-y-3  flex  flex-wrap bg-[#F9F9F9]">
            <TabsTrigger
              value="customer"
              className="mx-2 bg-white font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-2xl
             p-4 max-w-80 md:max-w-60"
            >
              My Saved Notes
            </TabsTrigger>
            <TabsTrigger
              value="professional"
              className="mx-2 bg-white font-medium data-[state=active]:bg-primary data-[state=active]:text-white rounded-2xl p-4
              max-w-80 md:max-w-60
              "
            >
              Professional & My Notes
            </TabsTrigger>
          </TabsList>
        </div>
        {/* tabs content  */}
        <div className="mt-3 w-full">
          <TabsContent value="customer">
            {forCustomers?.length > 0 ? (
              <>
                {forCustomers?.map((item) => (
                  <NotesCard key={item.id} card={item} />
                ))}
              </>
            ) : (
              <NoNotes addNotes={addNotes} />
            )}
          </TabsContent>
          <TabsContent value="professional">
            {forProsAndCustomers?.length > 0 ? (
              <>
                {forProsAndCustomers?.map((item) => (
                  <NotesCard key={item.id} card={item} />
                ))}
              </>
            ) : (
              <NoNotes addNotes={addNotes} />
            )}
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}

export default NotesTabs;

function NotesCard({ card }) {
  const [albumsPopup, setAlbumsPopup] = useState(false);
  return (
    <section>
      <div className="bg-white rounded-2xl px-3 py-4 my-6">
        <div>
          <div className="text-[#ABABAB]">
            <Description textsize="text-md" description={card.desc} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium text-sm">{card.createdAt}</p>
          <div>
            <Eye
              className="text-primary cursor-pointer"
              onClick={() => setAlbumsPopup(true)}
            />
          </div>
        </div>
      </div>
      {/* Modal */}
      <Dialog
        open={!!albumsPopup}
        onOpenChange={() => setAlbumsPopup(false)}
        className="p-1"
      >
        <DialogContent
          className="
          w-[95%] max-w-lg sm:max-w-md md:max-w-lg
          sm:rounded-lg rounded-2xl
          max-h-[95dvh] overflow-y-auto
          outline-none sm:px-6 py-6 border-none
        "
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {albumsPopup && (
            <>
              <DialogHeader className="-mt-4">
                <DialogTitle>
                  <div className="my-1 flex justify-between items-center w-[92%]">
                    <h2 className="text-xl max-w-[70%] text-left font-semibold">
                      Notes
                    </h2>
                    <div className="text-sm flex flex-col items-end">
                      <div className="text-muted-foreground text-right text-xs">
                        {card.createdAt}
                      </div>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <Separator />

              {/* Customer review  */}
              <div>
                <p className="text-[#545454] font-normal text-sm my-1">
                  {card.desc}
                </p>
              </div>
              <div className="grid mt-2 grid-cols-1 gap-6">
                {/* Image Section */}
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {card?.photos?.slice(0, 4)?.map((url, i) => (
                      <Image
                        height={100}
                        width={100}
                        key={i}
                        src={url}
                        alt="Before"
                        className="rounded-lg w-full max-w-[400px] h-38 object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
