"use client";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  HomeIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

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
      <div className="bg-[#5FA8D3] shadow-lg shadow-slate-700 backdrop-blur-sm p-4 rounded-md flex justify-between items-center font-medium mb-4">
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

        <nav className="hidden md:flex gap-6">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Button variant={"ghost"} key={link.name}>
                <Link
                  href={link.href}
                  className={clsx("flex md:gap-2 items-center", {
                    "bg-accent text-accent-foreground h-9 px-4 py-2 rounded-md ":
                      pathname === link.href,
                  })}
                >
                  <LinkIcon className="w-6" />
                  <p className="md:text-sm">{link.name}</p>
                </Link>
              </Button>
            );
          })}
        </nav>

        <nav className="hidden max-sm:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="mr-6">
              <Bars3Icon className="h-8 w-8 text-gray-500" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <DropdownMenuItem key={link.name}>
                    <Link
                      href={link.href}
                      className={clsx(
                        "flex flex-col md:gap-2 justify items-center",
                        {
                          "text-accent-foreground rounded-md ":
                            pathname === link.href,
                        }
                      )}
                    >
                      <span className="flex gap-2 items-center">
                        <LinkIcon className="w-6" />
                        <p className="md:text-sm">{link.name}</p>
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </>
  );
}
