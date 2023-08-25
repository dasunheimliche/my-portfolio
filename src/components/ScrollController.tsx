"use client";

import useScrollDirection from "@/hooks/isScrollingUp";
import { AppContext } from "./Providers";
import { useEffect, useRef, useContext } from "react";

import style from "../styles/projects.module.css";

export default function ScrollController({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { setIsScrollUp } = useContext(AppContext);
  const scrolleableElement = useRef(null);
  const isScrollingDown = useScrollDirection(scrolleableElement);

  useEffect(() => {
    setIsScrollUp(isScrollingDown);
  }, [isScrollingDown]);

  return (
    <div ref={scrolleableElement} className={className}>
      {children}
    </div>
  );
}
