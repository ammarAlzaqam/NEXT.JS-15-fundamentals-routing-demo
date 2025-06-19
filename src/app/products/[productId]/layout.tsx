import { ReactNode } from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      {children}
      <h1>Feature products</h1>
    </div>
  );
}
