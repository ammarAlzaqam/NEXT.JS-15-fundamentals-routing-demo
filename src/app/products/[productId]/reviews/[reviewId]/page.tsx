import { notFound, redirect } from "next/navigation";

interface ReviewProps {
  params: Promise<{ productId: string; reviewId: string }>;
}

const getRandomInt = (count: number) => Math.floor(Math.random() * count);

export default async function Review({ params }: ReviewProps) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);
  if (random === 1) throw new Error("Error loading review");
  if (parseInt(reviewId) > 1000) {
    // noFound();
    redirect("/products");
  }
  return (
    <h1>
      Review {reviewId} for Product {productId}
    </h1>
  );
}
