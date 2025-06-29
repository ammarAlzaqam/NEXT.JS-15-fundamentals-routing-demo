"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forget-password" },
];
export default function AuthLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <section>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            href={link.href}
            className={`me-3 ${isActive ? "font-bold" : "text-blue-300"}`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </section>
  );
}
