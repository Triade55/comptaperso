"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { LogInIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
function NoConect() {
  return (
    <>
      <header className="flex justify-between p-6 bg-white dark:bg-black border ">
        <Link href="/">
          <Image src="/next.svg" alt="mon logo" width={100} height={100} />
        </Link>
        <ModeToggle />
      </header>
      <div className="flex flex-col gap-3 items-center py-48 ">
        <p>Vous n&apos;&ecirc;tes pas connect&eacute; !</p>
        <Button
          onClick={() => signIn("github")}
          variant="outline"
          className="flex gap-1"
        >
          Se connecter avec GitHub
          <LogInIcon />
        </Button>
        
        <Button
          onClick={() => signIn("github")}
          variant="outline"
          className="flex gap-1"
        >
          Se connecter avec GitHub
          <LogInIcon />
        </Button>

      </div>
    </>
  );
}

export default NoConect;
