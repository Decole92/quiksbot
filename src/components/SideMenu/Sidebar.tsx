"use client";

import { useEffect, useState } from "react";
import { useGlobalStore } from "@/store/globalStore";
import MaxMenu from "./MaxMenu";
import MinMenu from "./MinMenu";

function Sidebar() {
  const [mounted, setMounted] = useState(false);
  // const isExtended = true;
  const [isExtended, setIsExtended] = useGlobalStore((state) => [
    state.isExtended,
    state.setIsExtended,
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='bg-gray-100 dark:bg-gray-900 md:min-h-screen h-full p-7 fixed z-20 w-20' />
    );
  }

  return (
    <div
      className={`bg-gray-100 dark:bg-gray-900 dark:text-[#E1B177] md:min-h-screen h-full p-7 fixed z-20 fill-mode-forwards transition-all duration-300 ${
        isExtended ? "w-64" : "w-20"
      }`}
    >
      {isExtended ? <MaxMenu /> : <MinMenu />}
    </div>
  );
}

export default Sidebar;
