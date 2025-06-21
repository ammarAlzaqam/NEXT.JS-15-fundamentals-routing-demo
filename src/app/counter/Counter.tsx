"use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        className="bg-cyan-500 text-gray p-1 rounded-lg hover:bg-cyan-700 hover:text-white transition cursor-pointer"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}
