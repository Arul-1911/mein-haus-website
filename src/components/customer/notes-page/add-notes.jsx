"use client";

import { Button } from "@/components/ui/button";
import AddNotesModal from "./add-notes-modal";
import { useState } from "react";
import { Plus } from "lucide-react";

function AddNotes() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section>
      <div>
        <div>
          <Button variant="black" onClick={(prev) => setModalOpen(true)}>
            <span>
              <Plus />
            </span>
            <span>Add Notes</span>
          </Button>
        </div>
      </div>
      {modalOpen && (
        <AddNotesModal mode={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

export default AddNotes;
