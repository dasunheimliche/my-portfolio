"use client";

import useSwipecontroller from "@/hooks/useSwipeController";
import { urlArray } from "@/utils/utils";
import { usePathname, useRouter } from "next/navigation";

export default function SwipeController({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment: string | null = usePathname();
  const navigator = useRouter();

  useSwipecontroller(segment, navigator);

  return <>{children}</>;
}
