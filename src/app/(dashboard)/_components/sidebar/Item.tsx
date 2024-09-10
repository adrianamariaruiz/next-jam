"use client"

import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import {cn} from "@/lib/utils";
import Image from "next/image";
import Hint from "@/components/Hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({name, imageUrl, id}: ItemProps) => {

  const {organization} = useOrganization();
  const {setActive} = useOrganizationList();

  const isActive = organization?.id === id;

  const imagrClick = () => {
    if(!setActive) return;

    setActive({organization: id});
  }

  return (
    <div className="aspect-square relative">
      <Hint
            label={name}
            side="right"
            align="start"
            sideOffset={16}
      >
        <Image
          fill
          alt={name}
          src={imageUrl}
          onClick={imagrClick}
          className={
            cn(
              "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
              isActive && "opacity-100"
            )
          }
        />
      </Hint>
    </div>
  )
}

export default Item