import Link from "next/link";

interface ReviewProps {
  params: Promise<{ productId: string }>;
}

export default async function Reviews({ params }: ReviewProps) {
  const { productId } = await params;
  return (
    <>
      <h1>Review List for Product {productId}</h1>
      <h2>
        <Link href={`/products/${productId}/reviews/1`}>Review 1</Link>
      </h2>
      <h2>
        <Link href={`/products/${productId}/reviews/2`}>Review 2</Link>
      </h2>
    </>
  );
}
