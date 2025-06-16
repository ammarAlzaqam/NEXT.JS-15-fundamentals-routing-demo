interface ReviewProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

export default async function Review({ params }: ReviewProps) {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
