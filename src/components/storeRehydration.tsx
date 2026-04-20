"use client";

import { useEffect } from "react";
import { useGlobalStore } from "@/store/globalStore";

export function StoreHydration() {
  useEffect(() => {
    useGlobalStore.persist.rehydrate();
  }, []);

  return null;
}
