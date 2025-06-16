import { notFound } from "next/navigation";

interface ReviewProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function Review({ params }: ReviewProps) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) notFound();
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
