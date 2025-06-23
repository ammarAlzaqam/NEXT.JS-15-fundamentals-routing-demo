"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <>
      <h1>{error.message}</h1>
      <button
        className="bg-amber-300 p-1 rounded-md text-gray-500 cursor-pointer hover:bg-white hover:text-black transition"
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        try again
      </button>
    </>
  );
}
