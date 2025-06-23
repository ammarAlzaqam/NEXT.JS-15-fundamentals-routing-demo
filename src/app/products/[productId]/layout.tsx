import { ReactNode } from "react";

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) throw new Error("Error loading product");
  return (
    <div>
      {children}
      <h1>Feature products</h1>
    </div>
  );
}
