import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { NavLinks } from "@/data/NavLinks";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between font-Poppins py-3 px-10 gap-5">
      <h1 className="text-2xl font-semibold">
        <Link href="/">TinyMakes</Link>
      </h1>
      <ul className="flex items-center gap-2 sm:gap-4 flex-wrap">
        {NavLinks?.map((navLink) => (
          <li key={navLink.id} className="capitalize text-lg tracking-wider hover:shadow-lg p-2 hover:shadow-teal-300">
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
