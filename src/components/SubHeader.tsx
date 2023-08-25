"use client";

import { useContext } from "react";

import { usePathname } from "next/navigation";

import { AppContext } from "@/components/Providers";

import Link from "next/link";

const SubHeader = () => {
  const { isScrollUp } = useContext(AppContext);

  const pathname = usePathname();

  const isProjectsPage = pathname?.startsWith("/projects");

  return (
    <div
      id={isScrollUp ? "sub-header hidden" : "sub-header"}
      className={isScrollUp ? "header hidden" : "header"}
    >
      <div id="s-header-left" className="header-left">
        <div>CLAUSSIMAR RODRíGUEZ</div>
      </div>
      <div id="s-header-right" className="header-right">
        <Link href={"/projects/zahir"}>
          <div
            className={
              isProjectsPage
                ? pathname?.startsWith("/projects/zahir")
                  ? "submenu-item-visible pointer selectedS"
                  : "submenu-item-visible pointer"
                : "submenu-item-hidden pointer"
            }
          >
            ZAHIR
          </div>
        </Link>
        <Link href={"/projects/promptify"}>
          <div
            className={
              isProjectsPage
                ? pathname?.startsWith("/projects/promptify")
                  ? "submenu-item-visible pointer selectedS"
                  : "submenu-item-visible pointer"
                : "submenu-item-hidden pointer"
            }
          >
            PROMPTIFY
          </div>
        </Link>
        <Link href={"/projects/words-battle"}>
          <div
            className={
              isProjectsPage
                ? pathname?.startsWith("/projects/words-battle")
                  ? "submenu-item-visible pointer selectedS"
                  : "submenu-item-visible pointer"
                : "submenu-item-hidden pointer"
            }
          >
            WORDS BATTLE
          </div>
        </Link>
        <Link href={"/projects/portfolio"}>
          <div
            className={
              isProjectsPage
                ? pathname?.startsWith("/projects/portfolio")
                  ? "submenu-item-visible pointer selectedS"
                  : "submenu-item-visible pointer"
                : "submenu-item-hidden pointer"
            }
          >
            PORTFOLIO
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
