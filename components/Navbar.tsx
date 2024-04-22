"use client";

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { NavLinks } from "@/data/NavLinks";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="flex items-center justify-between flex-wrap font-Poppins py-3 px-10 gap-5">
      <h1 className="text-3xl font-semibold">
        <Link href="/">TinyMakes</Link>
      </h1>
      <ul className="flex items-center gap-2 sm:gap-4 flex-wrap">
        {NavLinks?.map((navLink) => (
          <li
            key={navLink.id}
            className={`${
              path === navLink?.redirect_url && "border-b-2 border-red-500"
            } capitalize text-lg tracking-wider hover:border-b-2 border-red-500`}
          >
            <Link href={navLink.redirect_url}>{navLink.title}</Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
