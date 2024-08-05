import { Home, Slash } from "lucide-react";
import React from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
type Props = {
    index: number,
  segments: string[],
  d: string
}
export default function SousBread(
  {index,segments,d}:Props
) {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"}
        >
          {d === "Home" ? <Home /> : d}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Slash />
      </BreadcrumbSeparator>
    </>
  );
}
