import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Assistify</h1>
      <p>(The landing page is still under development)</p>
      <Link href="/sign-in">Get started</Link>
      <ModeToggle />
    </div>
  );
}
