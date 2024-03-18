"use client"

import Link from "next/link";
import { Bug } from "lucide-react";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const links = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues" },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 mb-5 px-5  border-b h-14 items-center">
      <Link href="/">
        <Bug color="black" />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors font-medium": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
