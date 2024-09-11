import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"
import { Plus } from "lucide-react"


const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2"/>
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-6 bg-white max-w-[880px]">
        <DialogDescription>
          <OrganizationProfile routing="hash"/>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export default InviteButton