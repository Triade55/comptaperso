"use client";
import { Home, Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function BreadcrumbWithCustomSeparator() {
  const routeur = usePathname();
  const segments = routeur.split("/");
  const lastSegment = segments[segments.length - 1];
  segments[0] = "Home";
  const h = segments.slice(0, segments.length - 1);
  return (
    <>
      {routeur !== "/" && (
        <Breadcrumb className="px-6 py-3 mb-2 bg-white dark:bg-black w-full">
          <BreadcrumbList>
            {h.map((d, index) => (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={
                      index > 0
                        ? `/${segments.slice(1, index + 1).join("/")}`
                        : "/"
                    }
                  >
                    {d === "Home" ? <Home /> : d}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              </>
            ))}
            <BreadcrumbItem>
              <BreadcrumbPage>{lastSegment} </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </>
  );
}
