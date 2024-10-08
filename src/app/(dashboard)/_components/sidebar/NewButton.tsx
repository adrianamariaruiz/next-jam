"use client"

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import Hint from "@/components/Hint";


const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create organization"
            side="right"
            align="start"
            sideOffset={16}
          >
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white"/>
            </button>
          </Hint>
        </div>
      </DialogTrigger>

      <DialogContent className="pt-10 bg-white border-none max-w-[480px]">
        <DialogHeader>
          <DialogDescription>
            <CreateOrganization routing="hash"/>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default NewButton