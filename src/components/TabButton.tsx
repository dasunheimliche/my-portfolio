"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ({ label, href }: { label: string; href: string }) {
  const path = usePathname();
  const isActive = path?.startsWith(`/${href.split("/")[1]}`);

  return (
    <Link
      href={href}
      className={isActive ? "noLink pointer selectedM" : undefined}
    >
      <div className={"menu-item pointer"}>{label}</div>
    </Link>
  );
}
