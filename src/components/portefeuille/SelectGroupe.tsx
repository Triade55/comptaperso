// components/PageComponent.tsx
"use client"
import React, { useEffect, useState } from "react";
import { getAllGroupe, GroupeById } from "@/query/groupe.query";
import { SelectItem } from "../ui/select";

const PageComponent = () => {
  const [groupes, setGroupes] = useState<GroupeById[]>();

  useEffect(() => {
    const fetchGroupes = async () => {
        const groupes = await getAllGroupe();
        setGroupes(groupes);
    };

    fetchGroupes();
  }, []);

  return (
    <>
      {groupes?.map((groupe) => (
        <SelectItem key={groupe?.id} value={groupe?.id ? groupe.id : ""}>
          {groupe?.name}
        </SelectItem>
      ))}
    </>
  );
};

export default PageComponent;
