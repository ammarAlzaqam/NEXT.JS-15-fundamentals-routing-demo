"use client"

import { usePathname } from "next/navigation"

export default function() {
    const pathname = usePathname();
    const product = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return <h1>Review {reviewId} for product {product} is not found</h1>
}