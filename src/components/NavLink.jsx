import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ children, href }) {
  const path = usePathname();
  return <Link href={href} className={path === href ? "active" : ""}>{children}</Link>;
}

export default NavLink;
