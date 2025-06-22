"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick} className="bg-white text-gray-800 p-1 rounded-b-md m-1 shadow-lg shadow-amber-800 ">Place order</button>
    </>
  );
}
