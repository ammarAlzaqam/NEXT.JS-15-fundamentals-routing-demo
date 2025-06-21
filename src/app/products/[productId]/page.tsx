import { Metadata } from "next";

interface ProductDetailsProps {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({
  params,
}: ProductDetailsProps): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise( (resolve) => {
    setTimeout( () => resolve(`iPhone ${productId}`), 200);
  })
  return { title: `product ${title}` };
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { productId } = await params;
  return <h1>Product {productId} details</h1>;
}
