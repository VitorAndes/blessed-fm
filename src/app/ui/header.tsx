"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  HomeIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const links = [
  {
    name: "Sobre",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Produtos",
    href: "/Produtos",
    icon: ShoppingCartIcon,
  },
  {
    name: "Contatos",
    href: "/Contatos",
    icon: UserIcon,
  },
];

export function Header() {
  const pathname = usePathname();
  return (
    <>
      <div className="bg-sky-500/60 shadow-lg shadow-slate-700 backdrop-blur-sm p-4 rounded-md flex justify-between items-center font-medium mb-4">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full"
            src="/Blessed_logo.jpeg"
            alt="Blessed logo"
            width={60}
            height={50}
          />
          <h1 className="text-2xl text-black font-bold">BlessedFm</h1>
        </div>
        <nav className="flex gap-6">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Button variant={"ghost"} key={link.name}>
                <Link
                  href={link.href}
                  className={clsx("flex gap-2 items-center", {
                    "bg-accent text-accent-foreground h-9 px-4 py-2 rounded-md ":
                      pathname === link.href,
                  })}
                >
                  <LinkIcon className="w-6" />
                  <p>{link.name}</p>
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
